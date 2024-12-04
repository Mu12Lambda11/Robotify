import Questionnaire2
import ArtistRec2
#Terminal versions provide the same functionality, so there's no need for a modified duplicate
from terminal_version import PlaylistRec
from terminal_version import AccountRec
import GeminiConnect
import SpotifyConnect
import os

#Flask stuff to connect to the front-end
from flask import Flask, jsonify, request
from flask_cors import CORS

app=Flask(__name__)
CORS(app)

#Initialize SpotifyConnect object to null
my_spotify = None


#@param String:prompt
#@return String: GeminiConnect.generate_playlist
#Used to fetch the playlist generated by Gemini API 
def use_gemini(prompt):
    return GeminiConnect.generate_playlist(prompt)

#@param String: song_list
#Used to parse through the Gemini generated string of songs to create an array of songs
#specifying title, artist, and year. Afterwards, use Spotify API to search for the songs
#and generate a playlist on the account.
#Now checks for correct formatting of the song_list.
def use_spotify(song_list,my_spotify):
    songs=[]
    correct_format=False
    try:
        for line in song_list.strip().split('\n'):
            title, rest = line.split(' /// ')
            album, rest = rest.split(' ### ')
            artist, year = rest.split(' (')
            year = year.rstrip(')')
            songs.append({'artist': artist, "title": title, "album":album, "year": year})
        
        my_spotify.search_songs(songs)
        #Formatting is correct, no need to retry the process
        correct_format=True
        return correct_format
    except:
        #Formatting is incorrect, retry the process
        print("Incorrect format")
        
        return correct_format

#Function that uses both APIs, and loops until a valid gemini response is created for use_spotify.
#Implemented primarily to avoid multiple instances of the same code across the prompt-making functions.
def use_APIs(prompt):
    spotifyCheck=False
    
    #Initialize SpotifyConnect object
    global my_spotify
    my_spotify= SpotifyConnect.SpotifyConnect()
    
    while spotifyCheck==False:
        response = use_gemini(prompt)
        print(response)
        
        spotifyCheck=use_spotify(response,my_spotify)
    return response
   
#Allows the user to perform a "logout" by just deleting the .cache file, and restarting the program 
@app.route('/logout-user', methods=['POST'])   
def logout_user():
    dir_path=os.getcwd()
    cache_path=dir_path+"/src/backend/.cache"
    #delete .cache file
    os.remove(cache_path)
 
#JSON function to meant to receive user input questionnaire data
# from the front end, then generate a prompt, and then use Gemini 
# and Spotify.
#@param Dictionary: data   
@app.route('/use-questionnaire', methods=['POST'])
def use_questionnaire():
    #Initialize SpotifyConnect object
    global my_spotify
    my_spotify= SpotifyConnect.SpotifyConnect()
    
    input_data = request.json.get('data')
    prompt = Questionnaire2.questionnaire(input_data)
    
    response = use_APIs(prompt)
    
    return jsonify(response)

#JSON function to meant to receive user input questionnaire data
# from the front end, then generate a prompt, and then use only Gemini,
# not Spotify.
#@param Dictionary: data   
@app.route('/use-questionnaire-offline', methods=['POST'])
def use_questionnaire_offline():
    input_data = request.json.get('data')
    prompt = Questionnaire2.questionnaire(input_data)
    
    response = use_gemini(prompt)
    
    return jsonify(response)

#JSON function to meant to receive user input playlist data
# from the front end, then generate a prompt, and then use Gemini 
# and Spotify.
#@param String: playlist_name   
@app.route('/use-playlist', methods=['POST'])
def use_playlist():
    
    playlist_name = request.json.get('playlist_name')
    prompt=PlaylistRec.playlist_rec()
    
    response = use_APIs(prompt)
    
    return jsonify(response)
#JSON function to meant to simply send back the results of the prompt.
#The artist data is gathered in from Spotify without needing specific input
#from the front-end.
@app.route('/use-account', methods=['POST'])
def use_account():
    
    top_artists=my_spotify.get_user_top_artists()
        
    prompt=AccountRec.account_rec(top_artists)
    
    response = use_APIs(prompt)
    
    return jsonify(response)

#JSON function to meant to receive user input questionnaire data
# from the front end, then generate a prompt, and then use Gemini 
# and Spotify.
#@param Dictionary: inputData   
@app.route('/use-artist', methods=['POST'])
def use_artist():
    artist_name = request.json.get('artist')
    prompt=ArtistRec2.artist_rec(artist_name)
    
    response = use_APIs(prompt)
    
    return jsonify(response)
    
if __name__ == '__main__':
    app.run(debug=True,port=5000)
    
