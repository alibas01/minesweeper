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
  } = useConditionsData();

  const adjustClass = function(difficulty) {
    let clas = "layout-";
    if (difficulty === "easy") {
      return clas + "easy";
    } else if (difficulty === "medium") {
      return clas + "medium";
    } else {
      return clas + "hard";
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
      />
      <Table
        table={table}
        setTable={setTable}
        difficulty={difficulty}
        flagCount={flagCount}
        setFlagCount={setFlagCount}
      />
    </div>
  );
}

export default App;
