import { useState } from "react";

const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: string) => {
    setValue(event);
  };

  const deleteValue = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    deleteValue,
  };
};
export default useInput;
