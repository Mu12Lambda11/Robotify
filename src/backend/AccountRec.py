def account_rec(top_artists):
    artists_string = '\n'.join(top_artists) if top_artists else ""

    prompt = (
            "Use the following top artists for a given Spotify user to produce a spotify-based playlist of similar songs or recommended songs.\n"
            "            Do not include a title for the playlist, include only the songs.\n"
            "            Do not include any\n"
            "            Format the songs as following without deviation:  Title /// Album ### Artist (Year)\n\n"
            "            Top Artists: " + artists_string
    )

            
    return prompt
