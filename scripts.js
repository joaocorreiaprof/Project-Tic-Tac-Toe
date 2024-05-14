// Define global variables
let currentPlayer = null;
let currentMessage = null;
const cells = document.querySelectorAll(".cell");

// Players object
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

// Function to handle player's move
function playersMove() {
  currentPlayer =
    currentPlayer === Players.player1 ? Players.player2 : Players.player1;
  return currentPlayer.mark;
}

// Function to check if the game is over
function checkGameOver() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  // Check for a win
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      return { winner: currentPlayer, isGameOver: true };
    }
  }

  // Check for a tie
  if ([...cells].every((cell) => cell.textContent !== "")) {
    return { isGameOver: true };
  }

  // Game is not over yet
  return { isGameOver: false };
}

// Function to handle end of game
function endGame(winner) {
  if (winner) {
    currentMessage.textContent = `${winner.name} wins!`;
  } else {
    currentMessage.textContent = "It's a tie!";
  }
}

// Function to start the game
function startGame() {
  currentPlayer = Players.player2; // Reset to player 2
  currentMessage = document.querySelector(".current-message");
  playGame();
}

// Function to handle the game board
function playGame() {
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.textContent === "") {
        currentMessage.textContent = "";
        cell.textContent = playersMove();
        const { isGameOver, winner } = checkGameOver();
        if (isGameOver) {
          endGame(winner);
        }
      } else {
        currentMessage.textContent =
          "The cell is already occupied. Try another move!";
      }
    });
  });
}

// Function to handle game restart
function restartGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  currentMessage.textContent = "";
  currentPlayer = Players.player2; // Reset to player 2
}

// Event listeners
document.querySelector(".start-button").addEventListener("click", () => {
  document.querySelector(".start-button").hidden = true;
  startGame();
});

document
  .querySelector(".restart-button")
  .addEventListener("click", restartGame);
