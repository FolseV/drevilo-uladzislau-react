import React from "react";

const words = [
  "1 word",
  "2 word",
  "3 word",
  "4 word",
  "5 word",
  "6 word",
  "7 word",
  "8 word",
  "9 word",
];

const RandomWord = () => {
  const [index, setIndex] = React.useState(null);

  const handleButtonClick = () => {
    setIndex(Math.floor(Math.random() * words.length));
  };

  return (
    <div className="randomWords">
      <p>Task-1-3 Random generator</p>
      <button onClick={handleButtonClick} className="button">
        Generate word
      </button>
      <div>{words?.[index]}</div>
    </div>
  );
};

export default RandomWord;
