import React, { useContext } from "react";

import { ThemeContext } from "./context/theme/theme.context";
import { TodoListContextWrapper } from "./context/todo-list/TodoList.context";

import HomePage from "./pages/HomePage";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="App" data-theme={theme}>
      <TodoListContextWrapper>
        <HomePage />
      </TodoListContextWrapper>
    </div>
  );
}

export default App;
