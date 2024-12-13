import { useContext, useEffect } from "react";
import "./App.css";
import Questionnaire from "./components/activities/Questionnaire.jsx";
import Loading from "./components/Loading.jsx";
import InitialPlaylist from "./components/InitialPlaylist.jsx";
import LandingPage from "./components/LandingPage.jsx";
import ChooseActivity from "./components/ChooseActivity.jsx";
import ActivityInputs from "./components/ActivityInputs.jsx";
import { WebpageContext } from "./context/WebpageContext.jsx";
import { QuestionnaireProvider } from "./context/QuestionnaireContext";
import { WebpageProvider } from "./context/WebpageContext.jsx";
import useWebpageContext from "./hooks/useWebpageContext.jsx";
import ErrorNotification from "./components/ErrorNotification.jsx";

function App() {
  // const {hasPlaylist, setHasPlaylist, playlist, setPlaylist, isLoading, setIsLoading, hasError} = useWebpageContext
  const {
    hasPlaylist,
    setHasPlaylist,
    playlist,
    setPlaylist,
    isLoading,
    setIsLoading,
    hasError,
    loggedIn,
    activity,
    hasSpotify,
  } = useContext(WebpageContext);

  //hasPlaylist? <InitialPlaylist />: hasError? <ErrorNotification /> : <Questionnaire />
  useEffect(() => {
    console.log("change is happening");
  }, [isLoading, hasPlaylist, hasError, loggedIn, activity]);
  return (
    <div>
      <h1>Botify</h1>
      {!loggedIn ? (
        <LandingPage />
      ) : isLoading ? (
        <Loading />
      ) : hasError ? (
        <ErrorNotification />
      ) : hasPlaylist ? (
        <InitialPlaylist />
      ) : hasSpotify && activity == -1? (
        <ChooseActivity />
      ) : activity >= 0? (
        <ActivityInputs />
      ): (
        <Questionnaire />
      )}
    </div>
  );
}

export default App;
