import { useState } from 'react';

export default function useConditionsData() {
  
  const [difficulty, setDifficulty] = useState("easy");
  

  return { difficulty, setDifficulty };
}