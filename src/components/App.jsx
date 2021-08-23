import React from "react";
import useConditionsData from "../hooks/useConditionsData";
import "../style/App.css";
import Nav from "./Nav";
import Table from "./Table";

function App() {
  const {
    difficulty,
    setDifficulty,
    table,
    setTable,
    show,
    setShow,
    flagCount,
    setFlagCount,
    freeze,
    setFreeze,
    start,
    setStart,
    end,
    setEnd,
  } = useConditionsData();

  const adjustClass = function(difficulty) {
    let clas = "layout-";
    if (difficulty === "Easy") {
      return clas + "Easy";
    } else if (difficulty === "Medium") {
      return clas + "Medium";
    } else {
      return clas + "Hard";
    }
  }

  return (
    <div className={adjustClass(difficulty)}>
      <Nav
        difficulty={difficulty}
        setDifficulty={setDifficulty}
        show={show}
        setShow={setShow}
        flagCount={flagCount}
        freeze={freeze}
        setFreeze={setFreeze}
        start={start}
        setStart={setStart}
        setEnd={setEnd}
        end={end}
      />
      <Table
        table={table}
        difficulty={difficulty}
        flagCount={flagCount}
        setFlagCount={setFlagCount}
        freeze={freeze}
        setFreeze={setFreeze}
        end={end}
      />
    </div>
  );
}

export default App;
