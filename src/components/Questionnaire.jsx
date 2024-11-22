import React from "react";
import QuestionInputs from "./QuestionInputs.jsx";
import useQuestionnaireContext from "../hooks/useQuestionnaireContext.jsx";
import '../App.css'



const Questionnaire = () => {
  const { page, setPage, data, title, canSubmit, canNext, canPrev } = useQuestionnaireContext();

  const handlePrev = () => setPage((prev) => prev - 1);
  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e) => {
    e.preventDefault();

    //Here I want to send the data to the Gemini API to be able to generate the playlist
  };

  return (
    <form onSubmit={handleSubmit}>
      <header>
        <h2>{title}</h2>
      </header>
      <QuestionInputs />
      <br /> <br />
      <div className="button-container">
          <button type="button" className="button" onClick={handlePrev} disabled={!canPrev}>
            Prev
          </button>

          <button type="button" className="button" onClick={handleNext} disabled={!canNext}>
            Next
          </button>

          <button type="submit" className="button" disabled={!canSubmit}>
            Generate Playlist!
          </button>
        </div>
    </form>
  );
};
export default Questionnaire;
