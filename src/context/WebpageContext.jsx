import React, { createContext, useState, useEffect } from "react";

export const WebpageContext = createContext({});

export const WebpageProvider = ({ children }) => {
  const [hasPlaylist, setHasPlaylist] = useState(false);
  const [playlist, setPlaylist] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

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
      }}
    >
      {children}
    </WebpageContext.Provider>
  );
};

export default WebpageContext;
