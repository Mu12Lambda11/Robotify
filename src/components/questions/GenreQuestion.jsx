import React from "react";

import useQuestionnaireContext from "../../hooks/useQuestionnaireContext";
import '../../App.css'


const GenreQuestion = () => {
  const { data, handleChange } = useQuestionnaireContext();

  return (
    <div>
      <h1>Select your favorite music genres</h1>
      <input type="checkbox" value="pop" name="favGenres" onChange={handleChange}/>
      Pop ✨
      <input type="checkbox" value="rock" name="favGenres" onChange={handleChange} />
      Rock 🎸
      <input type="checkbox" value="country" name="favGenres" onChange={handleChange} />
      Country🤠
      <input type="checkbox" value="rap" name="favGenres" onChange={handleChange} />
      Rap 🎤
      <input type="checkbox" value="rnb" name="favGenres" onChange={handleChange} />
      RnB🎵
      <input type="checkbox" value="indie" name="favGenres" onChange={handleChange} />
      Indie🎧
      <input type="checkbox" value="classical" name="favGenres" onChange={handleChange} />
      Classical🎻
    </div>
  );
};
export default GenreQuestion;
