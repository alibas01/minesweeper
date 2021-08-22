export function preTable(difficulty) {
  let size = 0;
  let bombCount = 0;
  let bombs = 0;
  
  difficulty === 'easy' ? size = 8 : difficulty === 'hard' ? size = 24 : size = 16;

  difficulty === 'easy' ? bombs = 16 : difficulty === 'hard' ? bombs = 120 : bombs = 40;
  // set the empty table
  const table = [];
  for (let i = 0; i < size; i++) {
    let row = [];
    for (let j = 0; j < size; j++) {
      row.push(0);
    }
    table.push(row);
  }
  // lay the bombs
  while (bombCount <= bombs) {
    let row = Math.floor(Math.random() * size);
    let col = Math.floor(Math.random() * size);
    if (!table[row][col]) {
      table[row][col] = 1;
      bombCount += 1;
    }
  }

  return table;
}

export function countBombs(table, row, col) {
  let size = table.length;
  let count = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      if (i === 0 && j === 0) {
        continue;
      }
      if (row + i < 0 || row + i >= size || col + j < 0 || col + j >= size) {
        continue;
      }
      if (table[row + i][col + j] === 1) {
        count++;
      }
    }
  }
  return count;
}
