import styles from "./List.module.css";

export const List = (props) => {
  const handleChecked = (e) => {
    props.array.map((item) => {
      if (item.text === e.target.value) {
        props.setArray(() => {
          return props.array.toSpliced(props.array.indexOf(item), 1, {
            text: item.text,
            flag: !item.flag,
          });
        });
      }
    });
  };

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
              onChange={handleChecked}
              checked={!item.flag}
            />
            <label htmlFor={item.text}></label>
          </div>
        );
      })}
    </ul>
  );
};
