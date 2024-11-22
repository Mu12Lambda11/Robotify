#@param dict: input
#@return String:complete_prompt
#Asks for user input, then uses all user input to generate a complete prompt to send to Gemini API

def questionnaire(input_data):
    
    artists_input =input_data["favArtists"]

    genre_input=input_data["favGenres"]
        
    context_input =input_data["musicVibes"]
    age_input = input_data["musicAge"]
    
    if('mix' in age_input):
        age_input='a mix of old and new'
        

    
    complete_prompt= """Use the following information to produce a spotify-based playlist of recommended music.
            Do not include a title for the playlist, include only the songs.
            Format the songs as following without deviation: Title /// Album ### Artist (Year)
            Music artists I like include %s, %s, and %s. 
            I like %s, %s, and %s. 
            I want  %s, %s, and %s vibes for the playlist. 
            I prefer %s music recommendations.""" % (artists_input[0],artists_input[1],artists_input[2],
                                                     genre_input[0],genre_input[1],genre_input[2],
                                                     context_input[0],context_input[1],context_input[2],
                                                     age_input)
    
    return complete_prompt
