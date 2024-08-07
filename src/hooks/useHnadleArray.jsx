import { useCallback } from "react";

export const useHandleArray = ({ array, setArray, text, setText }) => {
  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
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
    setArray((array) => {
      return array.filter((item) => {
        return item.flag === true;
      });
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
      }
      console.log(`item:flag=${item.flag}`);
      console.log(`item.text=${item.text}`);
    });
  };

  return { handleAdd, handleDelete, handleChecked };
};
