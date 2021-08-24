import React from "react";
import Row from "./Row";

// STYLESHEETS
import "../style/Table.css";

export default function Table(props) {
  const { difficulty, table, flagCount, setFlagCount, trueFlagCount, setTrueFlagCount, freeze, setFreeze, end } =
    props;

  const trueFlags = function(difficulty, count) {
    console.log(count);
    if (difficulty === "easy" && count === 10) return true;
    if (difficulty === "medium" && count === 40) return true;
    if (difficulty === "hard" && count === 120) return true;
    return false;
  }

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
     {flagCount===0 && trueFlags(difficulty, trueFlagCount) ? <div className="game-over">YOU WIN!</div> : null}
     {end && <div className="game-over">GAME ENDED!</div> }
    </div>
  );
}
