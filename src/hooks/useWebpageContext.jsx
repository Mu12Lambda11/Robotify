import { useContext } from "react";
import WebpageContext from "../context/WebpageContext.jsx";

const useWebpageContext = () => {
  let data = useContext(WebpageContext);
  console.log(JSON.stringify(data));
  return useContext(WebpageContext);
};

export default useWebpageContext;
