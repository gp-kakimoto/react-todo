import styles from "./List.module.css";

export const List = (props) => {
  return (
    <ul className={styles.todoListStyle}>
      {props.array.map((item) => {
        return (
          <div className={styles.listBox} key={item.text}>
            <li className={styles.todo}>
              <p>{item.text}</p>
            </li>
            <input
              type="checkbox"
              value={item.text}
              id={item.text}
              onChange={props.handleChecked}
              checked={!item.flag}
            />
            <label htmlFor={item.text}></label>
          </div>
        );
      })}
    </ul>
  );
};
