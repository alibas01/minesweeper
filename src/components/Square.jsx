import React, { useState, useEffect } from "react";



// STYLESHEETS
// import "./table.css";
import "../style/Square.css";

export default function Square(props) {
  const view = props.view;
  const numberB = props.numberB;

  const squareMode = function(view) {
    switch(view) {
      case "flag":
        return <i className="fas fa-flag fa-lg"></i>;
      break;
      case "openBomb":
        return <i className="fas fa-bomb fa-lg"></i>;
      break;
      case "openEmpty":
        return <i className="fas fa-square fa-2x"></i>;
      break;
      case "openNumber":
        return (
        <div className="numbericon">
          <p>{`${numberB}`}</p>
        </div>
        );
      break;
      default:
        return <i className="far fa-square fa-2x"></i>;
      break;
    }
  }

  return (
    <div>
    {squareMode(view)}
    </div>
  );
}
