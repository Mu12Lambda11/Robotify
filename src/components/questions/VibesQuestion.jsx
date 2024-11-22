import React from "react";

import useQuestionnaireContext from "../../hooks/useQuestionnaireContext";
import '../../App.css'

const VibesQuestion = () => {
  const { data, handleChange } = useQuestionnaireContext();

  return (
    <div>
      <h1>What kind of vibes are you looking for</h1>
      <input type="checkbox" value="chill" name="musicVibes" onChange={handleChange} defaultChecked={data.musicVibes.includes("chill")}  />
      Chill❄️
      <input type="checkbox" value="party" name="musicVibes" onChange={handleChange} defaultChecked={data.musicVibes.includes("party")} />
      Party🪩
      <input type="checkbox" value="cozy" name="musicVibes" onChange={handleChange} defaultChecked={data.musicVibes.includes("cozy")} />
      Cozy☕
      <input type="checkbox" value="sad" name="musicVibes" onChange={handleChange} defaultChecked={data.musicVibes.includes("sad")}/>
      Gloomy☁️
      <input type="checkbox" value="romantic" name="musicVibes" onChange={handleChange} defaultChecked={data.musicVibes.includes("romantic")}/>
      Love🌹
      <input type="checkbox" value="driving" name="musicVibes" onChange={handleChange} defaultChecked={data.musicVibes.includes("chill")} />
      Driving🚗
    </div>
  );
};
export default VibesQuestion;
