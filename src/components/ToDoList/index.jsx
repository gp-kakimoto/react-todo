import styles from "./ToDoList.module.css";
import { Form } from "../Form";
import { List } from "../List";
import { useState } from "react";
import useLocalData from "../../hooks/useLocalData";

export const ToDoList = () => {
  const [array, setArray] = useState([]);

  useLocalData({ array, setArray });
  const appName = "TODO";

  return (
    <div className={styles.todoList}>
      <h1>{appName}</h1>
      <Form setArray={setArray} />
      <List array={array} setArray={setArray} />
    </div>
  );
};
