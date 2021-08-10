import React from "react";

const SameInputs = () => {
  const [inputValue, setInputValue] = React.useState("");

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  return (
    <div className="inputs">
      <p>Task-1-2 Одинаковые инпуты</p>
      <input
        value={inputValue}
        onChange={(e) => handleInputChange(e.target.value)}
      ></input>
      <input value={inputValue} onChange={(e) => true}></input>
    </div>
  );
};

export default SameInputs;
