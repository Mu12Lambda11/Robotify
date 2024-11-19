import unittest
from PlaylistRec import playlist_rec

class TestPlaylistRec(unittest.TestCase):
    def test_empty_list(self):
        # Test with an empty list
        playlist_tracks = []
        expected_tracklist = ""
        expected_prompt = (
            """Use the following tracklist to produce a spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)""",
            expected_tracklist
        )
        result = playlist_rec(playlist_tracks)
        self.assertEqual(result, expected_prompt)

    def test_single_track(self):
        # Test with a single track
        playlist_tracks = ["Song 1 /// Album A ### Artist X (2000)"]
        expected_tracklist = "Song 1 /// Album A ### Artist X (2000)"
        expected_prompt = (
            """Use the following tracklist to produce a spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)""",
            expected_tracklist
        )
        result = playlist_rec(playlist_tracks)
        self.assertEqual(result, expected_prompt)

    def test_multiple_tracks(self):
        # Test with multiple tracks
        playlist_tracks = [
            "Song 1 /// Album A ### Artist X (2000)",
            "Song 2 /// Album B ### Artist Y (2005)",
            "Song 3 /// Album C ### Artist Z (2010)"
        ]
        expected_tracklist = "Song 1 /// Album A ### Artist X (2000)\n" \
                             "Song 2 /// Album B ### Artist Y (2005)\n" \
                             "Song 3 /// Album C ### Artist Z (2010)"
        expected_prompt = (
            """Use the following tracklist to produce a spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)""",
            expected_tracklist
        )
        result = playlist_rec(playlist_tracks)
        self.assertEqual(result, expected_prompt)

if __name__ == "__main__":
    unittest.main()
