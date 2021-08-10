// import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ButtonsIncreaseDecrease1 from "./hw-3-1/task-1-1";
import SameInputs from "./hw-3-1/task-1-2";

ReactDOM.render(
  <>
    <ButtonsIncreaseDecrease1 />
    <SameInputs />
  </>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

/*
reasons why component updates: 
// 1. setState
// 2. props update
// 3. parent update
*/

/*- Создать туду лист с возможность добавления и удаления элементов;
дополнительно со звездочкой:
- возможность изменение названия и возможность менять позицию тудушек
*/
