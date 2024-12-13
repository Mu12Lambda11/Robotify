import React from "react";

import useQuestionnaireContext from "../../hooks/useQuestionnaireContext";
import '../../App.css'


const GenreQuestion = () => {
  const { data, handleChange } = useQuestionnaireContext();

  return (
    <div>
      <h1>Select your favorite music genres</h1>
      <input type="checkbox" value="pop" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("pop")} />
      Pop ✨
      <input type="checkbox" value="rock" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("rock")} />
      Rock 🎸
      <input type="checkbox" value="country" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("country")} />
      Country🤠
      <input type="checkbox" value="rap" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("rap")} />
      Rap 🎤
      <input type="checkbox" value="rnb" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("rnb")} />
      RnB🎵
      <input type="checkbox" value="indie" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("indie")}  />
      Indie💿
      <input type="checkbox" value="classical" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("classical")}  />
      Classical🎻
      <input type="checkbox" value="musicalTheater" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("musicalTheater")}  />
      Musical Theater🎭
      <input type="checkbox" value="kpop" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("kpop")}  />
      KPop 🇰🇷
      <input type="checkbox" value="jpop" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("jpop")}  />
      JPop 🇯🇵
      <input type="checkbox" value="bedroomPop" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("bedroomPop")}  />
      Bedroom Pop 🌙
      <input type="checkbox" value="edm" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("edm")}  />
      EDM 🎶
      <input type="checkbox" value="punk" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("punk")}  />
      Punk 🎸
      <input type="checkbox" value="jazz" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("jazz")}  />
      Jazz 🎷
      <input type="checkbox" value="lofi" name="favGenres" onChange={handleChange} defaultChecked={data.favGenres.includes("lofi")}  />
      Lofi 🎧
    </div>
  );
};
export default GenreQuestion;
