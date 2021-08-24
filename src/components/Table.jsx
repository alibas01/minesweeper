import React from "react";
import Row from "./Row";

// STYLESHEETS
import "../style/Table.css";

export default function Table(props) {
  const { difficulty, table, flagCount, setFlagCount, trueFlagCount, setTrueFlagCount, freeze, setFreeze, end } =
    props;


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
              trueFlagCount={trueFlagCount}
              setTrueFlagCount={setTrueFlagCount}
              end={end}
            />
          );
        })}
      </div>
     {freeze && <div className="game-over">GAME OVER!</div> }
     {(difficulty === "Easy" && trueFlagCount === 10) || (difficulty === "Medium" && trueFlagCount === 40) || (difficulty === "Hard" && trueFlagCount === 120) ? <div className="game-over">YOU WIN!</div> : null}
     {end && <div className="game-over">GAME ENDED!</div> }
    </div>
  );
}
