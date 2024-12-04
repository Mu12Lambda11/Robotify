import { useState, useContext } from "react";
import useQuestionnaireContext from "../hooks/useQuestionnaireContext.jsx";
import { WebpageContext } from "../context/WebpageContext.jsx";

const InitialPlaylist = () => {
  const { playlist } = useContext(WebpageContext);
  console.log("playlist is", playlist)
  console.log(typeof(playlist))
  const { data } = useQuestionnaireContext();
    //<img src={song.AlbumURL} />

  return (
    <div>
      <h1>{data.name}'s personalized playlist</h1>
      <ul>
        {playlist.map((song) => (
          <li>
            <h3><i>{song.title}</i></h3>
            <span>{song.artist}</span>
            <span><i>{song.album}</i></span>
            <span>{song.year}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default InitialPlaylist;
