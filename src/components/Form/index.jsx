import styles from "./Form.module.css";

export const Form = (props) => {
  const inputProp = {
    type: "text",
    placeholder: "TODOを入力",
    autoComplete: "off",
  };
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <input
        type={inputProp.type}
        placeholder={inputProp.placeholder}
        autoComplete={inputProp.autoComplete}
        onChange={props.handleChange}
      />
      <button
        className={styles.buttonIcon}
        onClick={props.handleAdd}
        type="reset"
      >
        ADD
      </button>
      <button
        className={[styles["buttonIcon"], styles["buttonIconDel"]].join(" ")}
        onClick={props.handleDelete}
        type="button"
      >
        DEL
      </button>
    </form>
  );
};
