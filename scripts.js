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
      board[i][j] = "X"; // You can put any placeholder value here
    }
    console.log(i);
    console.log(board[i]); // Now you'll see the content of each row
  }
  console.log(board);
}

createBoard();
