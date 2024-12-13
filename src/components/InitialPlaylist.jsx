import { useState, useContext } from "react";
import useQuestionnaireContext from "../hooks/useQuestionnaireContext.jsx";
import { QuestionnaireContext } from "../context/QuestionnaireContext.jsx";
import { WebpageContext } from "../context/WebpageContext.jsx";

import "../App.css";

const InitialPlaylist = () => {
  const {
    playlist,
    hasSpotify,
    activity,
    setActivity,
    setLoggedIn,
    setHasPlaylist,
  } = useContext(WebpageContext);
  const { page, setPage, data, setData } = useContext(QuestionnaireContext);
  console.log("playlist is", playlist);
  console.log(typeof playlist);

  let greeting = data.name;

  if (greeting == "") {
    greeting = "Your ";
  } else {
    greeting += "'s ";
  }

  const returnToActivitySelection = () => {
    setActivity(-1);
    setHasPlaylist(false);
  };

  const logOut = () => {
    setLoggedIn(false);
    setHasPlaylist(false);
  };
  const restartQuestionnaire = () => {
    //need to clean the data
    setPage(0);
    setData({
      name: "",
      favGenres: [],
      favArtists: [],
      musicVibes: [],
      musicAge: "new",
    });
    setHasPlaylist(false);
  };
  return (
    <div>
      <h1>{greeting} personalized playlist</h1>
      <div className="playlistContainer">
        {playlist.map((song) => (
          <div className="song">
            <img className="albumCover" src={song.albumURL} />
            <div className="songInfo">
            <h2 className="songName">
              <b>{song.title}</b>
            </h2>
            <span className="artistName">
              <h3>{song.artist}</h3>
            </span>
            <span className="albumName">
              <i>{song.album}</i>
            </span>{" "}
            <br />
            <span className="songYear">{song.year}</span>
            </div>

          </div>
        ))}
      </div>
      <br /> <br />
      <div>
        {hasSpotify ? (
          <div>
            {" "}
            <button onClick={returnToActivitySelection}>
              Choose Another Option!
            </button>{" "}
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <div>
            <button onClick={restartQuestionnaire}>
              Try the Questionnaire Again!
            </button>{" "}
            <button onClick={logOut}>Exit App</button>
          </div>
        )}
      </div>
    </div>
  );
};
export default InitialPlaylist;
