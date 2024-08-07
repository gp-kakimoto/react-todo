import styles from "./Main.module.css";
import { ToDoList } from "../ToDoList";

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <ToDoList
        handleSubmit={props.handleSubmit}
        handleChange={props.handleChange}
        handleAdd={props.handleAdd}
        handleDelete={props.handleDelete}
        array={props.array}
        handleChecked={props.handleChecked}
      />
    </main>
  );
};
