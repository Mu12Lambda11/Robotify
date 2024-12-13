import React from "react";
import {useState, useContext} from "react"

import { WebpageContext } from "../../context/WebpageContext.jsx";
import "../../App.css";

const PlaylistRec = () => {
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

  const [playlist_name, setPlaylistName] = useState("")

  const handleChange = (e) => {
    setPlaylistName(e.target.value)
  }
  const generatePlaylist = () => {
    //here I call the backend to generate the playlist
    setIsLoading(true)
    //here I call the backend to generate the playlist
    fetch(`http://localhost:5000/use-playlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playlist_name }),
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
  }
  return (
    <div>
      <h1>Create a new Playlist based on your Playlist!</h1>
      <h3>Playlist Name</h3>
      <input
        type="text"
        className="inputBar"
        onChange={handleChange}
      /> <br /> <br />
      <button onClick={generatePlaylist}>Generate Playlist!</button>
    </div>
  );
};
export default PlaylistRec;
