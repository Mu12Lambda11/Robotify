import React from "react";

import useQuestionnaireContext from "../hooks/useQuestionnaireContext"
import '../App.css'

const Loading = () => {

    const {data} = useQuestionnaireContext()
    let greeting = data.name

    if(greeting == ""){
      greeting= "Your"
    } else {
      greeting += "'s"
    }

    return (
      <div>
          <h1>Loading {greeting} awesome playlist</h1>

      </div>
    );
  };
  export default Loading