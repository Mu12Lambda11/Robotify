import { useContext } from "react";
import WebpageContext from "../context/WebpageContext.jsx";

const useWebpageContext = () => {
  let data = useContext(WebpageContext);
  return useContext(WebpageContext);
};

export default useWebpageContext;
