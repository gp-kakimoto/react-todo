import styles from "./Main.module.css";
import { ToDoList } from "../ToDoList";

export const Main = () => {
  return (
    <main className={styles.main}>
      <ToDoList />
    </main>
  );
};
