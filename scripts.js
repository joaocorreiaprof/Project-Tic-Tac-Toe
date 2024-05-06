/*
E.g: 2d Matrix
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (row of matrix) {
  const rowString = row.join(" ");
  console.log(rowString);
}
*/

function createBoard() {
  const row = 3;
  const column = 3;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = " ";
    }
    console.log(i);
    console.log(board[i]);
  }

  board[0][0] = "1";
  board[0][1] = "2";
  board[0][2] = "3";
  console.log(board);
}

createBoard();
