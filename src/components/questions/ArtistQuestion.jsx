import React, { useState, useEffect } from "react";

import useQuestionnaireContext from "../../hooks/useQuestionnaireContext";
import SelectionButton from "../SelectionButton";
import "../../App.css";

const ArtistQuestion = () => {
  const { data,  setData, handleChange } = useQuestionnaireContext();
  const [artists, setArtists] = useState([]);
  const [currentInput, setCurrentInput] = useState("");

  const addNewArtist = () => {
    setArtists([
      ...artists,
      currentInput
    ])
    setData((prevData) => ({
      ...prevData,
      favArtists: [...prevData.favArtists, currentInput]
    })) 
  };

  const deleteArtist = (artistToDelete) => {
    setArtists(
      artists.filter((artist) => artist !== artistToDelete)
    );
    setData((prevData) => ({
      ...prevData,
      favArtists:[...prevData.favArtists.filter((artist) => artist !== artistToDelete)]
    }))
  };

  return (
    <div>
      <h1>Please type in some of your favorite artists</h1>
      {artists && artists.length > 0 ? (
        artists.map((artist) => <SelectionButton name={artist} handleDelete={() => deleteArtist(artist)}/>)
      ) : (
        <p>Artists you enter will appear here</p>
      )}
      <br /> <br />
      <input
        type="text"
        className="inputBar"

        onChange={(event) => setCurrentInput(event.target.value)}
      ></input>
      <br /> <br /> <br />
      <button onClick={addNewArtist}>Add</button>
    </div>
  );
};
export default ArtistQuestion;
