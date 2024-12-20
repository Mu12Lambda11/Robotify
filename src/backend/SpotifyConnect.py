import spotipy
import creds

#Used to generate a random state variable for security in authorization
import random
import string

#Used to parse special characters in spotify song search
from urllib.parse import quote

#Used for cache file purposes
import os
from pathlib import Path

#Used to use AI to name the playlist
import GeminiConnect

from spotipy.oauth2 import SpotifyOAuth

import google.generativeai as genai

my_api_key= creds.gemini_api_key
genai.configure(api_key=my_api_key)
model = genai.GenerativeModel('gemini-pro')


class SpotifyConnect:
    def __init__(self):
        #Generate a state. This helps to protect the security of API calls.
        gen_state=''.join(random.choices(string.ascii_letters,k=16))
        
        dir_path=Path(__file__).resolve()
        dir_path=os.path.dirname(dir_path)

        
        cache_path=dir_path+"/.cache"
        print(cache_path)
        
        self.auth_manager = SpotifyOAuth(client_id=creds.spotipy_client_id,
                                         client_secret=creds.spotipy_client_secret,
                                         redirect_uri='https://localhost:8000',
                                         scope='playlist-modify-public, user-top-read',
                                         #Cache handler instance to specify cache path
                                         cache_handler=spotipy.CacheFileHandler(cache_path=cache_path),
                                         state=gen_state,
                                         show_dialog=True)
        
        #Open authorization window in case a user needs to change accounts
        #self.auth_manager._open_auth_url()
        
        self.sp = spotipy.Spotify(auth_manager=self.auth_manager)
        self.check_and_refresh_token()
        


    def check_and_refresh_token(self):
        token_info = self.auth_manager.get_cached_token()
        if not token_info:
            print("No cached token found. Getting a new token.")
            token_info = self.auth_manager.get_access_token(as_dict=False)
            print(f"New Token: {token_info}")
        elif self.auth_manager.is_token_expired(token_info):
            print("Token expired. Refreshing token.")
            refreshed_token = self.auth_manager.refresh_access_token(token_info['refresh_token'])
            print(f"Refreshed Token: {refreshed_token}")
            self.sp = spotipy.Spotify(auth=refreshed_token['access_token'])
        else:
            print("Token is valid.")
    #@param List:songs_array
    #Searches for the songs in spotify's database, and adds them to a list of uris if found
    #Afterwards, generates a playlist using these found songs.
    def search_songs(self, songs_array):
        print("searching songs")
        self.check_and_refresh_token()  # Ensure token is valid before making requests
        song_uris = []
        for song in songs_array:
            query = quote(f"{song['artist']} {song['title']}")
            #Used to verification. Take out on release.
            #print(f"Query: {query}")  # Print the query
            
            result = self.sp.search(q=query, type='track', limit=10)
            #Used to verification. Take out on release.
            #print(f"Result: {result}")
            
            if result['tracks']['items']:
                song_uris.append(result['tracks']['items'][0]['uri'])
                #here i will try to get the url for the cover art

            else:
                print(f"No results found for {song['title']} - {song['artist']} ({song['year']})")
        
        user_id = self.sp.current_user()['id']
        print("done searching all the songs")
        
        #Name the playlist using AI
        prompt = "Please name this playlist. Give it a fun name that's not too cringy."
        prompt += "The songs in this playlist are as follows: " + str(songs_array)
        print("prompt to name the playlist", prompt)
        try:
            response=model.generate_content(prompt)
            user_playlist_name=response.text 
        except Exception as e:
            user_playlist_name =" My AI Generated Playlist"

        playlist = self.sp.user_playlist_create(user=user_id, name=user_playlist_name, public=True)
        self.sp.playlist_add_items(playlist_id=playlist['id'], items=song_uris)
        print("Playlist has been generated! Check Spotify!")
    
    def get_playlists(self):
        playlists=self.sp.current_user_playlists()
        playlists_info = [(pl['name'], pl['external_urls']['spotify']) for pl in playlists['items']]

        return playlists_info
    
    def get_playlist_tracks(self, playlist_id):
        results=self.sp.playlist_tracks(playlist_id)
        tracks = [f"{track['track']['name']} by {track['track']['artists'][0]['name']}" for track in results['items']]
        return tracks
    
    def get_user_playlist(self, playlist_name):
        print("looking for playlist named", playlist_name)
        user_playlists=self.get_playlists()
        #user_input = input("Enter the name of the playlist in your library")
        matched_playlist = next((pl for pl in user_playlists if playlist_name.lower() in pl[0].lower()), None)

        if matched_playlist:
            playlist_url= matched_playlist[1]
            playlist_id= playlist_url.split('/')[-1]
            songs=self.get_playlist_tracks(playlist_id)
            return songs
        else:
            return "No matching playlist found"
        
    def get_user_top_artists(self):
        user_top_artists=self.sp.current_user_top_artists(limit=10)
        artists_info=[(artist['name']) for artist in user_top_artists['items']]
        return artists_info
    
    def get_user_top_tracks(self):
        user_top_tracks=self.sp.current_user_top_tracks(limit=10)
        tracks_info=[(track['name']) for track in user_top_tracks['items']]
        return tracks_info
    



    
    

