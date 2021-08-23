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
    <div>
      <div className="table">
        {table.map((row, rowIndex) => {
          return (
            <Row
              key={rowIndex}
              table={table}
              rowIndex={rowIndex}
              freeze={freeze}
              setFreeze={setFreeze}
              flagCount={flagCount}
              setFlagCount={setFlagCount}
            />
          );
        })}
      </div>
     {freeze && <div className="game-over">GAME OVER!</div> }
     { (difficulty==="Easy" && flagCount===10) || (difficulty==="Medium" && flagCount===40) || (difficulty==="Easy" && flagCount===120) ? <div className="game-over">YOU WIN!</div> : null}
    </div>
  );
}
