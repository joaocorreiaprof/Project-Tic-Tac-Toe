//Get cells
const cells = document.querySelectorAll(".cell");

cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    cell.textContent = playersMove();
  });
});
//Players object
const Players = {
  player1: {
    name: "Player 1",
    mark: "X",
  },
  player2: {
    name: "Player 2",
    mark: "O",
  },
};
// Current player
let currentPlayer = Players.player1;

function playersMove() {
  // Toggle between players
  if (currentPlayer === Players.player1) {
    currentPlayer = Players.player2;
  } else {
    currentPlayer = Players.player1;
  }

  // Return the mark of the current player
  return currentPlayer.mark;
}
