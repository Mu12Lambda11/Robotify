import React from "react";

import useQuestionnaireContext from "../hooks/useQuestionnaireContext"
import '../App.css'

const ErrorNotification = () => {

    const {data} = useQuestionnaireContext()

    return (
      <div>
          <h1>Unfortunately, we encountered an error</h1>
          
      </div>
    );
  };
  export default ErrorNotification