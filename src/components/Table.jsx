import React, { useState, useEffect } from "react";
import { preTable, countBombs } from "../helper/randomizeTable"
import Square from "./Square";
import useConditionsData from "../hooks/useConditionsData";

// STYLESHEETS
// import "./table.css";
//import "../styles/nav.scss";

export default function Table(props) {
  const [table, setTable] = useState([]);
  const [view, setView] = useState("hidden");
  // const { difficulty } = useConditionsData();
  const difficulty = "easy"

  useEffect(() => {
    setTable(preTable(difficulty));
   //when play clicks, the table is reset
  }, []);

  const prepareTable = function(t) {
    let tableWithHiddenBombs = t.map((row, rowIndex) => {
      return row.map((v, colIndex) => {
        return (
          <Square
            key={rowIndex + "-" + colIndex}
            value={v}
            onClick={setView("visible")}
            view={view}
            numberBombs={countBombs(t, rowIndex, colIndex)}
          />
        );
      });
    });
    return tableWithHiddenBombs;
  }

  return (
    <div className="table">
      {prepareTable(table)}
    </div>
  );
}
