import { useCallback, useState } from "react";
import styles from "./Form.module.css";

export const Form = (props) => {
  const [text, setText] = useState("");

  const handleChange = useCallback((e) => {
    if (e.target.value.length > 100) {
      alert("100文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleAdd = useCallback(() => {
    props.setArray((prevArray) => {
      if (prevArray.some((item) => item.text === text)) {
        alert("同じ内容がリスト中に存在します");
        return prevArray;
      }
      if (text.trim().length === 0) {
        alert("TODOを入力してください");
        return prevArray;
      }

      return [...prevArray, { text: text, flag: true }];
    });
    setText("");
  }, [text]);

  const handleDelete = useCallback(() => {
    props.setArray((array) => {
      return array.filter((item) => {
        return item.flag === true;
      });
    });
  }, []);

  const inputProp = {
    type: "text",
    placeholder: "TODOを入力",
    autoComplete: "off",
  };

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type={inputProp.type}
        placeholder={inputProp.placeholder}
        autoComplete={inputProp.autoComplete}
        onChange={handleChange}
      />
      <button className={styles.buttonIcon} onClick={handleAdd} type="reset">
        ADD
      </button>
      <button
        className={`${styles.buttonIcon} ${styles.buttonIconDel}`}
        onClick={handleDelete}
        type="button"
      >
        DEL
      </button>
    </form>
  );
};
