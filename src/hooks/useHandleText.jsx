import { useCallback } from "react";

const useHandleText = (setText) => {
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

  return { handleChange, handleSubmit };
};

export default useHandleText;
