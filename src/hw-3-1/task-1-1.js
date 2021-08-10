import React from "react";

const ButtonsIncreaseDecrease1 = () => {
  const [state, setState] = React.useState(0);

  const handleClick = (value) => {
    setState((prevState) => prevState + value);
  };

  return (
    <div className="buttons">
      <p>кнопки +1 и -1</p>
      <button onClick={() => handleClick(+1)}> Click me + 1 </button>
      {state}
      <button onClick={() => handleClick(-1)}> Click me - 1 </button>
    </div>
  );
};

export default ButtonsIncreaseDecrease1;
