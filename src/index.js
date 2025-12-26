import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";

import "./index.css";
import "./styles/themes.css";
import "./styles/animations.css";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
