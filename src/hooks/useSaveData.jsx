import { useEffect } from "react";

export const useSaveData = (array) => {
  useEffect(() => {
    if (array.length > 0) {
      localStorage.setItem("todoArray", JSON.stringify(array));
    }

    return () => {
      localStorage.removeItem("todoArray");
    };
  }, [array]);
};
