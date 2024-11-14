import React from "react";

import useQuestionnaireContext from "../../hooks/useQuestionnaireContext";
import "../../App.css";

const NameQuestion = () => {
  const { data, handleChange } = useQuestionnaireContext();

  return (
    <div>
      <h1>Welcome to the Music Recommender</h1>
      <h3>Please enter your name</h3>
      <input
        type="text"
        className="inputBar"
        name="name"
        onChange={handleChange}
      />
    </div>
  );
};
export default NameQuestion;
