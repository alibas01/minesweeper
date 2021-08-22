import React, { useState } from "react";

// STYLESHEETS
// import "./table.css";
import "../style/Square.css";

export default function Square(props) {
  const view = props.view;
  const numberBombs = props.numberBombs;
  const value = props.value;
  

  const squareMode = function() {
    if (view === "flag") {
      return <i className="fas fa-flag fa-lg"></i>;
    } else if (view === "hidden") {
      return <i className="far fa-square fa-2x"></i>;
    } else if (view === "visible" && value) {
      return <i className="fas fa-bomb fa-lg"></i>;
    } else if (view === "visible" && !value && numberBombs !== 0) {
      return (
        <div className="numbericon">
          <p>{`${numberBombs}`}</p>
        </div>
        );
      } else {
        return <i className="fas fa-square fa-2x"></i>;
      }
  };
      

  return (
    <div>
    {squareMode()}
    </div>
  );
}
