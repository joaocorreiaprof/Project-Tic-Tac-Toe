//Get cells

function playGame() {
  const cells = document.querySelectorAll(".cell");
  let currentMessage = document.querySelector(".current-message");

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (cell.textContent === "") {
        console.log(startGame);
        currentMessage.textContent = "";
        cell.textContent = playersMove();
      } else {
        currentMessage.textContent =
          "The cell is already occupied. Try another move!";
      }
    });
  });
}
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

let currentPlayer = Players.player2; //In the future i need to change this. No global varibles

function playersMove() {
  // Toggle between players
  if (currentPlayer === Players.player1) {
    currentPlayer = Players.player2;
  } else {
    currentPlayer = Players.player1;
  }
  return currentPlayer.mark;
}

//Start Game

let startGame = document.querySelector(".start-button");

startGame.addEventListener("click", () => {
  startGame.hidden = true;
  playGame();
});
