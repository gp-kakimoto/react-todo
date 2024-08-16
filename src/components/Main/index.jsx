import styles from "./Main.module.css";
import { ToDoList } from "../ToDoList";

export const Main = (props) => {
  return (
    <main className={styles.main}>
      <ToDoList />
    </main>
  );
};
