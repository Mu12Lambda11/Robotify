import React from "react";

import useQuestionnaireContext from "../hooks/useQuestionnaireContext"
import '../App.css'

const Loading = () => {

    const {data} = useQuestionnaireContext()

    return (
      <div>
          <h1>Loading {data.name}'s awesome playlist</h1>

      </div>
    );
  };
  export default Loading