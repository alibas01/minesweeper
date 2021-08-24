import { useState, useEffect } from "react";
import { prepareTable } from "../helper/randomizeTable";

export default function useConditionsData() {
  const [difficulty, setDifficulty] = useState("Easy");
  const [show, setShow] = useState(false);
  const [flagCount, setFlagCount] = useState(10);
  const [trueFlagCount, setTrueFlagCount] = useState(0);
  const [freeze, setFreeze] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(false);
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
    //when play clicks, or diffuculty changes the table is reset
  }, [start, difficulty]);

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
    start,
    setStart,
    end,
    setEnd,
    trueFlagCount,
    setTrueFlagCount,
  };
}
