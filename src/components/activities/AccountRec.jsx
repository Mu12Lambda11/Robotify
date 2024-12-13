import React from "react";
import { useState, useContext } from "react";

import { WebpageContext } from "../../context/WebpageContext.jsx";
import "../../App.css";

const AccountRec = () => {
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
    setArtist(e.target.value);
  };
  const generateAccountPlaylist = () => {
    //here I call the backend to generate the playlist
    setIsLoading(true);
    //here I call the backend to generate the playlist
    fetch(`http://localhost:5000/use-account`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //body: JSON.stringify({ artist }),
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
      <h1>Account Based Recommendations</h1>
      <button onClick={generateAccountPlaylist}>Generate Playlist!</button>
    </div>
  );
};
export default AccountRec;
