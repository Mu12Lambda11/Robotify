import { useState, useContext } from "react";
import useQuestionnaireContext from "../hooks/useQuestionnaireContext.jsx";
import { WebpageContext } from "../context/WebpageContext.jsx";
import '../App.css'

const LandingPage = () => {
  const { loggedIn, setLoggedIn, hasSpotify, setHasSpotify } = useContext(WebpageContext);

  const connectToSpotify = () => {
    setHasSpotify(true);
    //code to log in would go here
    setLoggedIn(true)
  }
  const continueAsGuest = () => {
    setLoggedIn(true)
  }
  return (
    <div>
      <h1>Welcome to the Music Recommender</h1>
      <p>To use this app, you can either use spotify or continue as a guest</p>
      <div className="landingBtns">
      <button onClick={connectToSpotify} className="connectToSpotify">Connect with Spotify</button>
      <br/>       <br/>

      <button onClick={continueAsGuest}>Continue as a guest</button>
      </div>


    </div>
  );
};
export default LandingPage;
