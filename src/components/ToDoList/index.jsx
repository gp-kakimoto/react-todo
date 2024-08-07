import styles from "./ToDoList.module.css";

import { Form } from "../Form";
import { List } from "../List";

export const ToDoList = (props) => {
  const appName = "TODO";
  return (
    <div className={styles.todoList}>
      <h1>{appName}</h1>
      <Form
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        handleAdd={props.handleAdd}
        handleDelete={props.handleDelete}
      />
      <List array={props.array} handleChecked={props.handleChecked} />
    </div>
  );
};
