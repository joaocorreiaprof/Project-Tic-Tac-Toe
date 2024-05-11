function createBoard() {
  const row = 3;
  const column = 3;
  const board = [];

  for (let i = 0; i < row; i++) {
    board[i] = [];
    for (let j = 0; j < column; j++) {
      board[i][j] = " ";
    }
  }
  console.log(board);
}

const Players = {
  player1: {
    name: "Player 1",
    mark: "X",
  },
  player2: {
    name: "Player 2",
    mark: "O",
  },

  getPlayersMark: function () {
    const playerArray = Object.values(this);
    const playerMarks = playerArray.map((player) => player.mark);

    console.log(playerMarks);
    return playerMarks;
  },
};

function controlFlow() {
  createBoard();
  takeTurn();
}

controlFlow();
