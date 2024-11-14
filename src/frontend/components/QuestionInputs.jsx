import React from "react";
import useQuestionnaireContext from "../hooks/useQuestionnaireContext";
import NameQuestion from "./questions/NameQuestion";
import GenreQuestion from "./questions/GenreQuestion";
import ArtistQuestion from "./questions/ArtistQuestion";
import VibesQuestion from "./questions/VibesQuestion";
import AgeQuestion from "./questions/AgeQuestion";
import '../App.css'


const QuestionInputs = () => {
  const { page } = useQuestionnaireContext();

  const display = {
    0: <NameQuestion />,
    1: <GenreQuestion />,
    2: <ArtistQuestion />,
    3: <VibesQuestion />,
    4: <AgeQuestion />,
  };

  return <div>{display[page]}</div>;
};
export default QuestionInputs;
