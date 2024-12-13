import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { QuestionnaireProvider } from "./context/QuestionnaireContext.jsx";
import { WebpageProvider } from "./context/WebpageContext.jsx";
createRoot(document.getElementById("root")).render(
  <WebpageProvider>
    <QuestionnaireProvider>
      <App />
    </QuestionnaireProvider>
  </WebpageProvider>
);
