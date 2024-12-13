import React, {useState, useContext} from "react";
import { WebpageContext } from "../context/WebpageContext.jsx";
import AccountRec from "./activities/AccountRec.jsx";
import ArtistRec from "./activities/ArtistRec.jsx";
import PlaylistRec from "./activities/PlaylistRec.jsx";
import Questionnaire from "./activities/Questionnaire.jsx";

import '../App.css'


const ActivityInputs = () => {
const {activity} = useContext(WebpageContext)
console.log("activity is", activity)
  const display = {
    0: <AccountRec />,
    1: <ArtistRec />,
    2: <PlaylistRec />,
    3: <Questionnaire />,
  };

  return (
  <div>
    {display[activity]}
  </div>);
};
export default ActivityInputs;
