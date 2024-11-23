def artist_rec(input_data):
    artist_input=input_data
    
    prompt="""Use the following artist information to produce a Spotify-based playlist of recommended music based.
            Do not include a title for the playlist, include only the songs.
            Include music from similar music artists. Do not only include songs from the provided artist.
            Format the songs as following without any deviation: Title /// Album ### Artist (Year)
            I like to listen to %s.""" % (artist_input)
            
    return prompt