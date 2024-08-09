import { useEffect } from "react";

const useLocalData = ({ array, setArray }) => {
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("todoArray")) != null) {
      setArray(() => {
        return JSON.parse(localStorage.getItem("todoArray"));
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoArray", JSON.stringify(array));
  }, [array]);
};

export default useLocalData;
