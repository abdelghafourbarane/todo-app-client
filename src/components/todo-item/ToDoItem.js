import React, { useState, useContext } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import { TodoListContext } from "../../context/todo-list/TodoList.context";

import styles from "./ToDoItem.module.scss";

function ToDoItem({ content, todoId }) {
  const [check, setCheck] = useState(false);
  const handleCheck = () => {
    setCheck(!check);
  };

  const { removeTodoItem } = useContext(TodoListContext);
  return (
    <div className={styles.todo_item}>
      <div className={styles.content_container}>
        <input
          type="radio"
          onClick={() => {
            handleCheck();
          }}
          checked={check ? true : false}
          readOnly
        />
        <span className={`${check ? styles.content_checked : ""}`}>
          {content}
        </span>
      </div>
      <div
        className={styles.icon_container}
        onClick={() => {
          removeTodoItem(todoId);
        }}
      >
        <DeleteForeverIcon className={styles.delete_icon} />
      </div>
    </div>
  );
}

export default ToDoItem;
