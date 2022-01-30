import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import SideBar from "../components/side-bar/SideBar";
import ToDoItem from "../components/todo-item/ToDoItem";

import styles from "./HomePage.module.scss";

import { TO_DO_LIST } from "../TO_DO_LIST";

function HomePage() {
  const [addField, setAddField] = useState("");
  const handleAddFieldChange = (event) => {
    setAddField(event.target.value);
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
          <AddCircleIcon className={styles.add_icon} />
        </div>
        <div className={styles.todo_list}>
          {TO_DO_LIST.map(({ id, content }) => (
            <ToDoItem key={`todo_${id}`} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
