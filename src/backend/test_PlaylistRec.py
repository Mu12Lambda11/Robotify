import unittest
import PlaylistRec  # Make sure PlaylistRec is correctly imported

class TestPlaylistRec(unittest.TestCase):
    def test_playlist_rec_with_empty_list(self):
        playlist_tracks = []
        result = PlaylistRec.playlist_rec(playlist_tracks)[0]  # Access first element
        expected_prompt = """Use the following tracklist to produce a Spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)\n\n"""
        self.assertEqual(result.strip(), expected_prompt.strip())

    def test_playlist_rec_with_one_track(self):
        playlist_tracks = ["Track1 /// Album1 ### Artist1 (2023)"]
        result = PlaylistRec.playlist_rec(playlist_tracks)[0]  # Access first element
        expected_prompt = """Use the following tracklist to produce a Spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)\n\nTrack1 /// Album1 ### Artist1 (2023)"""
        self.assertEqual(result.strip(), expected_prompt.strip())

    def test_playlist_rec_with_multiple_tracks(self):
        playlist_tracks = ["Track1 /// Album1 ### Artist1 (2023)", "Track2 /// Album2 ### Artist2 (2024)"]
        result = PlaylistRec.playlist_rec(playlist_tracks)[0]  # Access first element
        expected_prompt = """Use the following tracklist to produce a Spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)\n\nTrack1 /// Album1 ### Artist1 (2023)\nTrack2 /// Album2 ### Artist2 (2024)"""
        self.assertEqual(result.strip(), expected_prompt.strip())

if __name__ == '__main__':
    unittest.main()
