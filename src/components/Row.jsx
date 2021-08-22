import React, { useState } from "react";
import { countBombs } from "../helper/randomizeTable"
import Square from "./Square";
//import useConditionsData from "../hooks/useConditionsData";

// STYLESHEETS
import "../style/Row.css";

export default function Table(props) {
  const [view, setView] = useState("hidden");
  const rowIndex = props.rowIndex;
  const table = props.table;

  const row = table[rowIndex];

  const handleView = (e) => {
    if (e.type === "click") {
      setView("visible");
    } else if (e.type === "contextmenu") {  // right click
      setView("flag");
    } else {
      setView("hidden");
    }
  };


  const prepareRow = function(r, rowIndex, table) {
    
  }

  return (
    <div className="row">
      {row.map((val, colIndex) => {
        return (
          <Square
            key={rowIndex + "-" + colIndex}
            value={0}
            view="hidden"
            onClick={handleView}
            onContextMenu={handleView}
            numberBombs={countBombs(table, rowIndex, colIndex)}
          />
        );
      })}
    </div>
  );
}
