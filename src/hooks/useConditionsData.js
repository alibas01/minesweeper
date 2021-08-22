import { useState, useEffect } from 'react';
import { prepareTable } from "../helper/randomizeTable"

export default function useConditionsData() {
  
  const [difficulty, setDifficulty] = useState("easy");
  const [show, setShow] = useState(false);
  const [flagCount, setFlagCount] = useState(0);
  const [table, setTable] = useState([
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]]);

  useEffect(() => {
    setTable(prepareTable(difficulty));
   //when play clicks, the table is reset
  }, []);
  

  return { difficulty, setDifficulty, table, setTable, show, setShow, flagCount, setFlagCount };
}