import { useContext } from "react";
import QuestionnaireContext from "../context/QuestionnaireContext.jsx";

const useQuestionnaireContext = () => {
  let data = useContext(QuestionnaireContext);
  console.log(JSON.stringify(data));
  return useContext(QuestionnaireContext);
};

export default useQuestionnaireContext;
