import Head from "next/head";
import styles from "../styles/Home.module.css";
/** コンポーネントのインポート */
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ToDoList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Footer />
    </div>
  );
};
export default Home;
