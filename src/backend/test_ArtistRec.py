import unittest
from unittest.mock import patch
from ArtistRec import artist_rec

class TestArtistRec(unittest.TestCase):
    @patch("builtins.input", return_value="Taylor Swift")
    def test_artist_input(self, mock_input):
        # Test when the user inputs an artist's name
        expected_prompt = """Use the following artist information to produce a Spotify-based playlist of recommended music based.
            Do not include a title for the playlist, include only the songs.
            Include music from similar music artists. Do not only include songs from the provided artist.
            Format the songs as following without any deviation: Title /// Album ### Artist (Year)
            I like to listen to Taylor Swift."""
        
        result = artist_rec()
        self.assertEqual(result, expected_prompt)

    @patch("builtins.input", return_value="The Beatles")
    def test_different_artist_input(self, mock_input):
        # Test when a different artist is input
        expected_prompt = """Use the following artist information to produce a Spotify-based playlist of recommended music based.
            Do not include a title for the playlist, include only the songs.
            Include music from similar music artists. Do not only include songs from the provided artist.
            Format the songs as following without any deviation: Title /// Album ### Artist (Year)
            I like to listen to The Beatles."""
        
        result = artist_rec()
        self.assertEqual(result, expected_prompt)

    @patch("builtins.input", return_value="")
    def test_empty_artist_input(self, mock_input):
        # Test when the user does not provide any artist's name
        expected_prompt = """Use the following artist information to produce a Spotify-based playlist of recommended music based.
            Do not include a title for the playlist, include only the songs.
            Include music from similar music artists. Do not only include songs from the provided artist.
            Format the songs as following without any deviation: Title /// Album ### Artist (Year)
            I like to listen to ."""
        
        result = artist_rec()
        self.assertEqual(result, expected_prompt)

if __name__ == "__main__":
    unittest.main()
