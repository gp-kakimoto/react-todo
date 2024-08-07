import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";

import { useSaveData } from "../hooks/useSaveData";
import { useLoadData } from "../hooks/useLoadData";
import { useHandleArray } from "../hooks/useHnadleArray";
import { useHandleText } from "../hooks/useHandleText";
/*import { useLoadData } from "./hooks/useLoadData";*/

import { Form } from "../components/Form";
import { List } from "../components/List";
import { Footer } from "../components/Footer";
export default function Home() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const { handleChange, handleSubmit } = useHandleText(setText);
  const { handleAdd, handleDelete, handleChecked } = useHandleArray({
    array,
    setArray,
    text,
    setText,
  });

  useSaveData(array);

  useLoadData(setArray);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.todoList}>
          <h1>TODO</h1>
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            handleAdd={handleAdd}
            handleDelete={handleDelete}
          />
          <List array={array} handleChecked={handleChecked} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
