import React, { useState } from "react";

// STYLESHEETS
// import "./table.css";
import "../style/Square.css";

export default function Square(props) {
  const [view, setView] = useState("hidden");

  const numberBombs = props.numberBombs;
  const value = props.value;


  const squareMode = function () {
    if (view === "flag") {
      return <i className="fas fa-flag fa-lg" onClick={() => setView("visible")}></i>;
    } else if (view === "hidden") {
      return (
        <i
          className="far fa-square fa-2x"
          onClick={() => setView("visible")}
          onContextMenu={() => setView("flag")}
        ></i>
      );
    } else if (view === "visible" && value) {
      return <i className="fas fa-bomb fa-lg"></i>; //game over
    } else if (view === "visible" && !value && numberBombs !== 0) {
      return (
        <div className="numbericon">
          <p>{`${numberBombs}`}</p>
        </div>
      );
    } else if (view === "visible" && !value && numberBombs === 0) {
      return <i className="fas fa-square fa-2x"></i>;
    }
  };

  return <div>{squareMode()}</div>;
}
