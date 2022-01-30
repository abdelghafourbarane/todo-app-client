import React, { useContext } from "react";

import { ThemeContext } from "./context/theme/theme.context";

import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={theme}>
      <HomePage />
    </div>
  );
}

export default App;
