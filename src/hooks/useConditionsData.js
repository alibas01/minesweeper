import { useState, useEffect } from "react";
import { prepareTable } from "../helper/randomizeTable";

export default function useConditionsData() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [show, setShow] = useState(false);
  const [flagCount, setFlagCount] = useState(0);
  const [freeze, setFreeze] = useState(false);
  const [table, setTable] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ]);

  useEffect(() => {
    setTable(prepareTable(difficulty));
    //when play clicks, the table is reset
  }, []);

  return {
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
  };
}
