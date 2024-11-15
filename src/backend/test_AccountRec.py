import unittest
from AccountRec import account_rec

class TestAccountRec(unittest.TestCase):
    def setUp(self):
        self.maxDiff = None  # Allows full diff display in case of assertion failure

    def test_account_rec_with_three_artists(self):
        top_artists = ["Artist1", "Artist2", "Artist3"]
        expected_prompt = """Use the following top artists for a given Spotify user to produce a spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Do not include any
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)

            Top Artists: Artist1
Artist2
Artist3"""
        result = account_rec(top_artists)
        self.assertEqual(result.strip(), expected_prompt.strip())

    def test_account_rec_with_one_artist(self):
        top_artists = ["SoloArtist"]
        expected_prompt = """Use the following top artists for a given Spotify user to produce a spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Do not include any
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)

            Top Artists: SoloArtist"""
        result = account_rec(top_artists)
        self.assertEqual(result.strip(), expected_prompt.strip())

    def test_account_rec_with_empty_list(self):
        top_artists = []
        expected_prompt = """Use the following top artists for a given Spotify user to produce a spotify-based playlist of similar songs or recommended songs.
            Do not include a title for the playlist, include only the songs.
            Do not include any
            Format the songs as following without deviation:  Title /// Album ### Artist (Year)

            Top Artists:"""
        result = account_rec(top_artists)
        self.assertEqual(result.strip(), expected_prompt.strip())

if __name__ == "__main__":
    unittest.main()
