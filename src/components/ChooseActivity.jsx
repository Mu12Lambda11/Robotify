import { useState, useContext } from "react";
import useQuestionnaireContext from "../hooks/useQuestionnaireContext.jsx";
import { WebpageContext } from "../context/WebpageContext.jsx";
import "../App.css";

const ChooseActivity = () => {
  const {
    setActivity,
  } = useContext(WebpageContext);


  const changeActivity = (index) => {
    console.log("index", index)
    setActivity(index);
  };
  return (
    <div>
      <h1>Thanks for logging in!</h1>
      <p>As a verified spotify user, you have several options here today.</p>
      <div className="landingBtns">
        <button onClick={() => changeActivity(0)}>
          Create a playlist based on your spotify account
        </button>
        <br />
        <br />
        <button onClick={() =>changeActivity(1)}>
          Create a playlist to discover new artists!
        </button>
        <br />
        <br />
        <button onClick={ () =>changeActivity(2)}>
          Name + Create a new playlist!
        </button>
        <br />
        <br />
        <button onClick={ () => changeActivity(3)}>
          Fill out a questionnaire, then get a playlist based on the results
        </button>
      </div>
    </div>
  );
};
export default ChooseActivity;
