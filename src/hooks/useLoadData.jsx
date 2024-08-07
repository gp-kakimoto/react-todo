import { useEffect } from "react";

export const useLoadData = (setArray) => {
  const loadData = () => {
    return JSON.parse(localStorage.getItem("todoArray"));
  };

  useEffect(() => {
    const tmpData = loadData();
    if (tmpData != null) {
      setArray(() => {
        return tmpData;
      });
    }
  }, []);
};
