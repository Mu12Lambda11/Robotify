import React, { createContext, useState, useEffect } from "react";

const QuestionnaireContext = createContext({});

export const QuestionnaireProvider = ({ children }) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState({
    name: "",
    favGenres: [],
    favArtists: [],
    musicVibes: [],
    musicAge: "new",
  });

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked
    const name = e.target.name
    if(isChecked){
      const value = e.target.value
      //Need to add the newly checked value to the array
      setData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name],value]
      }))

    } else {
      const value = e.target.value
      //Need to remove the unchecked item from the list
      setData((prevData) => ({
        ...prevData,
        [name]: [...prevData[name].filter(item => item !== value)]
      }))

    }
    
  }

  const handleChange = (e) => {
    console.log("trying to handle a change")
    const type = e.target.type;
    const name = e.target.name;
    const value = e.target.value;

    if(type ==="checkbox"){
      handleCheckboxChange(e)
    } else {
      setData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  ///const { name, ...requiredInputs } = data; 

  //Represents if all the needed data is present
  const allInfoPresent = data.name !== "" && data.favGenres.length > 0 && data.favArtists.length > 0 && data.musicVibes.length > 0 && data.musicAge !== "";

  const canSubmit = page === 4 && allInfoPresent;

  const canNext = page != 4;
  const canPrev = page != 0;

  return (
    <QuestionnaireContext.Provider value={{ page, setPage, data, setData, handleChange, canSubmit, canNext, canPrev }}>
      {children}
    </QuestionnaireContext.Provider>
  );
};

export default QuestionnaireContext;
