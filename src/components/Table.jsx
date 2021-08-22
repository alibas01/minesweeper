import React, { useState, useEffect } from "react";
import { prepareTable } from "../helper/randomizeTable"
import Row from "./Row";
import useConditionsData from "../hooks/useConditionsData";

// STYLESHEETS
// import "./table.css";
import "../style/Table.css";

export default function Table() {
  const [table, setTable] = useState([]);
  // const { difficulty } = useConditionsData();
  const difficulty = "easy"

  useEffect(() => {
    setTable(prepareTable(difficulty));
   //when play clicks, the table is reset
  }, []);

  const prepareT = table.map((row, rowIndex) => {
        return (
          <Row
            key={rowIndex}
            table={table}
            rowIndex={rowIndex}
          />
        );
      });

  return (
    <div className="table">
      {prepareT}
    </div>
  );
}
