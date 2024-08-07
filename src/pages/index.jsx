import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
/** custom hooksのインポート */
import { useSaveData } from "../hooks/useSaveData";
import { useLoadData } from "../hooks/useLoadData";
import { useHandleArray } from "../hooks/useHnadleArray";
import { useHandleText } from "../hooks/useHandleText";
/** コンポーネントのインポート */
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

const Home = () => {
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
      <Main
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        array={array}
        handleChecked={handleChecked}
      />
      <Footer />
    </div>
  );
};
export default Home;
