import React, { useContext, useEffect } from "react";
import QuestionInputs from "../QuestionInputs.jsx";
import useQuestionnaireContext from "../../hooks/useQuestionnaireContext.jsx";
import { QuestionnaireContext } from "../../context/QuestionnaireContext.jsx";
import { WebpageContext } from "../../context/WebpageContext.jsx";
import useWebpageContext from "../../hooks/useWebpageContext.jsx";
import "../../App.css";

const Questionnaire = () => {
  //const { page, setPage, data, title, canSubmit, canNext, canPrev } = useQuestionnaireContext();
  const { page, setPage, data, title, canSubmit, canNext, canPrev } =
    useContext(QuestionnaireContext);
  //const {hasPlaylist, setHasPlaylist, playlist, setPlaylist, isLoading, setIsLoading, hasError, setHasError} = useWebpageContext();
  const {
    hasPlaylist,
    setHasPlaylist,
    playlist,
    setPlaylist,
    isLoading,
    setIsLoading,
    hasError,
    setHasError,
    hasSpotify
  } = useContext(WebpageContext);

  const handlePrev = () => setPage((prev) => prev - 1);
  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    console.log("trying to handle submit");

    

    //Here I want to send the data to the Gemini API to be able to generate the playlist
    fetch(`http://localhost:5000/${hasSpotify? 'use-questionnaire': 'use-questionnaire-offline'}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
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
      <header>
        <h2>{title}</h2>
      </header>
      <QuestionInputs />
      <br />
      <br />
      <div className="button-container">
        <button
          type="button"
          className="button"
          onClick={handlePrev}
          disabled={!canPrev}
        >
          Prev
        </button>

        <button
          type="button"
          className="button"
          onClick={handleNext}
          disabled={!canNext}
        >
          Next
        </button>

        <button
          type="submit"
          className="button"
          disabled={!canSubmit}
          onClick={handleSubmit}
        >
          Generate Playlist!
        </button>
      </div>
    </div>
  );
};
export default Questionnaire;
