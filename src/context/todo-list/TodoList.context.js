import { createContext, useState } from "react";

import { TO_DO_LIST } from "../../TO_DO_LIST";

export const TodoListContext = createContext();

export const TodoListContextWrapper = ({ children }) => {
  const [todoList, setTodoList] = useState(TO_DO_LIST);

  const addTodoItem = (item) => {
    setTodoList([item, ...todoList]);
  };

  const removeTodoItem = (todoId) => {
    setTodoList(todoList.filter((todo) => todo.id !== todoId));
  };

  return (
    <TodoListContext.Provider value={{ todoList, addTodoItem, removeTodoItem }}>
      {children}
    </TodoListContext.Provider>
  );
};
