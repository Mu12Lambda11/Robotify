#@param dict: input
#@return String:complete_prompt
#Asks for user input, then uses all user input to generate a complete prompt to send to Gemini API


def questionnaire(input_data):
    
    artists_input =input_data["favArtists"]
    artists_input_str = ",".join(artists_input)

    genre_input=input_data["favGenres"]
    genre_input_str = ",".join(genre_input)

    context_input =input_data["musicVibes"]
    context_input_str = ",".join(context_input)

    age_input = input_data["musicAge"]
    
    if('mix' in age_input):
        age_input='a mix of old and new'
        

    
    complete_prompt= """Use the following information to produce a spotify-based playlist of recommended music.
            Do not include a title for the playlist, include only the songs.
            Make sure to double check your work in the formatting. TRIPLE CHECK. 
            Format the songs as following without deviation: Title /// Album ### Artist (Year) 
            Music artists I like include the following: %s. 
            I like the following genre(s): %s. 
            I want the following vibes for the playlist: %s. 
            I prefer %s music recommendations.""" % (artists_input_str,
                                                     genre_input_str,
                                                     context_input_str,
                                                     age_input)
    
    return complete_prompt
