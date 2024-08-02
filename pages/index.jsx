import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useCallback, useEffect, useState } from "react";

import { useSaveData } from "./hooks/useSaveData";
import { useLoadData } from "./hooks/useLoadData";
/*import { useLoadData } from "./hooks/useLoadData";*/

export default function Home() {
  const [text, setText] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = useCallback((e) => {
    if (e.target.value.length > 100) {
      alert("100文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (
        prevArray.some((item) => item.text === text)
        /* prevArray.includes(text)
         */
      ) {
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

  /*useSaveData(array);*/

  const handleDelete = useCallback(() => {
    /* const newarray = array.filter((item) => {
      return item.flag === true;
    });*/
    setArray((array) => {
      /*return newarray;*/
      /*const hideIndex = array.findIndex((item) => item.flag === false);
      return array.toSpliced(hideIndex, 1);*/

      return array.filter((item) => {
        return item.flag === true;
      });
      /*return array.toSpliced(hideIndex, 1, {
        text: "",
        flag: false,
      });*/
    });

    console.log(`after delte item .... array is ${array}`);
  }, []);

  const handleChecked = (e) => {
    array.map((item) => {
      if (item.text === e.target.value) {
        setArray(() => {
          return array.toSpliced(array.indexOf(item), 1, {
            text: item.text,
            flag: !item.flag,
          });
        });
        /*
        if (item.flag === true) {
          setArray(() => {
            return array.toSpliced(array.indexOf(item), 1, {
              text: item.text,
              flag: false,
            });
          });
        } else {
          setArray(() => {
            return array.toSpliced(array.indexOf(item), 1, {
              text: item.text,
              flag: true,
            });
          });
        }*/
      }
      console.log(`item:flag=${item.flag}`);
      console.log(`item.text=${item.text}`);
    });
  };
  /* useEffect(() => {
    if (array.length > 0) {
      console.log("This is Save Process");
      localStorage.setItem("todoArray", JSON.stringify(array));
    }

    return () => {
      console.log("This is to the final saveData prosess..");
      localStorage.removeItem("todoArray");
    };
  }, [array]);
 */
  useSaveData(array);

  /* const saveData = () => {
    console.log("todolist=");
    console.log(array);
    const hoge = JSON.stringify(array);
    console.log("JSON DATA =");
    console.log(hoge);
    localStorage.setItem("todoArray", JSON.stringify(array));
  };
 */

  const loadData = () => {
    return JSON.parse(localStorage.getItem("todoArray"));
  };

  /*
  useEffect(() => {
    console.log("gnerating load data...");

    if (JSON.parse(localStorage.getItem("todoArray")) != null) {
      console.log("tmpdata is now loading");

      setArray(() => {
        return JSON.parse(localStorage.getItem("todoArray"));
      });
    }
  }, []);
*/

  useEffect(() => {
    const tmpData = loadData();
    if (tmpData != null) {
      setArray(() => {
        return tmpData;
      });
    }
  }, []);

  /*useLoadData();*/
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.todoList}>
          <h1>TODO</h1>
          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="TODOを入力"
              autoComplete="off"
              onChange={handleChange}
            />
            <button
              className={styles.buttonIcon}
              onClick={handleAdd}
              type="reset"
            >
              ADD
            </button>
            <button
              className={[styles["buttonIcon"], styles["buttonIconDel"]].join(
                " "
              )}
              onClick={handleDelete}
              type="button"
            >
              DEL
            </button>
          </form>

          <ul className={styles.todoListStyle}>
            {array.map((item) => {
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
                  {/*      <button
                    onClick={() => {
                      if (item.flag === true) {
                        setArray(() => {
                          return array.toSpliced(array.indexOf(item), 1, {
                            text: item.text,
                            flag: false,
                          });
                        });
                      } else {
                        setArray(() => {
                          return array.toSpliced(array.indexOf(item), 1, {
                            text: item.text,
                            flag: true,
                          });
                        });
                      }
                      console.log(`item:flag=${item.flag}`);
                      console.log(`item.text=${item.text}`);
                    }}
                  >
                    {item.flag ? "未完" : "完了"}
                  </button> */}
                </div>
              );
            })}
          </ul>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
