import React, { createContext, useState, useEffect } from "react";

export const WebpageContext = createContext({});

export const WebpageProvider = ({ children }) => {
  const [hasPlaylist, setHasPlaylist] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasSpotify, setHasSpotify] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)
  const [activity, setActivity] = useState(-1);

  return (
    <WebpageContext.Provider
      value={{
        hasPlaylist,
        setHasPlaylist,
        playlist,
        setPlaylist,
        isLoading,
        setIsLoading,
        hasError,
        setHasError,
        hasSpotify, setHasSpotify,
        loggedIn, setLoggedIn,
        activity, setActivity
      }}
    >
      {children}
    </WebpageContext.Provider>
  );
};

export default WebpageContext;
