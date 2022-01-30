import React from "react";
import ReactDOM from "react-dom";

import { ThemeContextWrapper } from "./context/theme/theme.context";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContextWrapper>
      <App />
    </ThemeContextWrapper>
  </React.StrictMode>,
  document.getElementById("root")
);
