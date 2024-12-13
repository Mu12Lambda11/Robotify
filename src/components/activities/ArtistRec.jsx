import React from "react";
import {useState, useContext} from "react"

import { WebpageContext } from "../../context/WebpageContext.jsx";
import { QuestionnaireContext } from "../../context/QuestionnaireContext.jsx";

import "../../App.css";

const ArtistRec = () => {
  const [artist, setArtist] = useState("")
  const {
    hasPlaylist,
    setHasPlaylist,
    playlist,
    setPlaylist,
    isLoading,
    setIsLoading,
    hasError,
    setHasError,
  } = useContext(WebpageContext);

  const handleChange = (e) => {
    setArtist(e.target.value)
  }
  const generateArtistPlaylist = () => {
    setIsLoading(true)
    //here I call the backend to generate the playlist
    fetch(`http://localhost:5000/use-artist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ artist }),
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("result is", result);
          setIsLoading(false);
  
          setHasPlaylist(true);
          setPlaylist(result);
        })
        .catch((error) => {
          setIsLoading(false);
          console.error("Error:", error);
          setHasError(true);
        });
    };
  
  
  return (
    <div>
      <h1>Discover New Artists</h1>
      <h3>Artist you want to base this playlist on!</h3>
      <input
        type="text"
        className="inputBar"
        name="name"
        onChange={handleChange}
      /> <br /> <br />
      <button onClick={generateArtistPlaylist}>Generate Playlist!</button>
    </div>
  );
};
export default ArtistRec;
