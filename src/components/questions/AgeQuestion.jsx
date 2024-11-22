import React from "react";

import useQuestionnaireContext from "../../hooks/useQuestionnaireContext"
import '../../App.css'

const AgeQuestion = () => {

    const {data, handleChange} = useQuestionnaireContext()


    return (
      <div>
          <h1>I tend to prefer...</h1>
          <select onChange={handleChange} name="musicAge" defaultValue={data.musicAge?data.musicAge:"new"}>
            <option onSelect={handleChange} value="new" >The latest songs🌟</option>
            <option onSelect={handleChange} value="old" >Throwbacks🕰️</option>
            <option onSelect={handleChange} value="mix" >A mix of both🎨</option>
          </select>
      </div>
    );
  };
  export default AgeQuestion