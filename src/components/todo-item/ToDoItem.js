import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

import styles from "./ToDoItem.module.scss";

function ToDoItem({ content }) {
  return (
    <div className={styles.todo_item}>
      <span>{content}</span>
      <div className={styles.icon_container}>
        <DeleteForeverIcon className={styles.delete_icon} />
      </div>
    </div>
  );
}

export default ToDoItem;
