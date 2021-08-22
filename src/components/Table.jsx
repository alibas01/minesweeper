import React, { useState, useEffect } from "react";
import Row from "./Row";

// STYLESHEETS
// import "./table.css";
import "../style/Table.css";

export default function Table(props) {
  const { difficulty, table, flagCount, setFlagCount, freeze, setFreeze } =
    props;

  // const prepareT = table.map((row, rowIndex) => {
  //       return (
  //         <Row
  //           key={rowIndex}
  //           table={table}
  //           rowIndex={rowIndex}
  //         />
  //       );
  //     });

  return (
    <div className="table">
      {table.map((row, rowIndex) => {
        return (
          <Row
            key={rowIndex}
            table={table}
            rowIndex={rowIndex}
            freeze={freeze}
            setFreeze={setFreeze}
            difficulty={difficulty}
            flagCount={flagCount}
            setFlagCount={setFlagCount}
          />
        );
      })}
    </div>
  );
}
