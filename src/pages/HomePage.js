import React, { useEffect, useState, useContext } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import { TodoListContext } from "../context/todo-list/TodoList.context";

import SideBar from "../components/side-bar/SideBar";
import ToDoItem from "../components/todo-item/ToDoItem";

import styles from "./HomePage.module.scss";

function HomePage() {
  const { todoList, addTodoItem } = useContext(TodoListContext);
  const [addField, setAddField] = useState("");
  const handleAddFieldChange = (event) => {
    setAddField(event.target.value);
  };
  const handleAddClick = () => {
    if (addField) {
      addTodoItem({
        id: Math.floor(Math.random() * 100),
        content: addField,
      });
      setAddField("");
    }
  };

  return (
    <div className={styles.home_page}>
      <SideBar />
      <div className={styles.main_section}>
        <h1>TODO App</h1>
        <div className={styles.new_subject_container}>
          <input
            type="text"
            placeholder="add new subject"
            value={addField}
            onChange={handleAddFieldChange}
          />
          <AddCircleIcon
            className={styles.add_icon}
            onClick={() => {
              handleAddClick();
            }}
          />
        </div>
        <div className={styles.todo_list}>
          {todoList.map(({ id, content }) => (
            <ToDoItem key={`todo_${id}`} content={content} todoId={id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
