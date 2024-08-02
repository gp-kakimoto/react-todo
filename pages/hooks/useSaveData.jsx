import { useEffect } from "react";

export const useSaveData = (array) => {
  console.log(`todolist(array)=${array}`);

  const jsonData = JSON.stringify(array);
  console.log(`JSON DATA =${jsonData}`);

  useEffect(() => {
    if (array.length > 0) {
      console.log("This is Save Process");
      localStorage.setItem("todoArray", JSON.stringify(array));
    }

    return () => {
      console.log("This is to the final saveData prosess..");
      localStorage.removeItem("todoArray");
    };
  }, [array]);
};
