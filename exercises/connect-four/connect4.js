/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

const WIDTH = 7;
const HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
let board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  // My Attempt
  for(let i=0; i < HEIGHT; i++) {
    board[i] = [];
    for(let j=0; j < WIDTH; j++) {
        board[i][j] = null;
    }
  }
  //Solution
  // for (let y = 0; y < HEIGHT; y++) {
  //   board.push(Array.from({ length: WIDTH }));
  // }
}

/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.getElementById('board');

  // TODO: add comment for this code
  let top = document.createElement("tr"); //add top clicker row
  top.setAttribute("id", "column-top"); //set the id to #column-top
  top.addEventListener("click", handleClick); //add event listener for the top column
                                      //function handled later in script

  for (let x = 0; x < WIDTH; x++) { //for each array in the top row
    let headCell = document.createElement("td"); //add td
    headCell.setAttribute("id", x); //set id to x
    top.append(headCell); //append to headcell td
  }
  htmlBoard.append(top); //add top row first to the html

  // TODO: add comment for this code
  for (let y = 0; y < HEIGHT; y++) { //for every height array in the matrx
    let row = document.createElement("tr"); //make a new row
    for (let x = 0; x < WIDTH; x++) { //for each row until the width
      let cell = document.createElement("td"); //make a td
      cell.setAttribute("id", `${y}-${x}`); //set its id
      row.append(cell); //append it to the the td
    }
    htmlBoard.append(row); //then append the whole row
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  for (let i = HEIGHT - 1; i >= 0; i--){
    if(!board[i][x]){
      return i;
    }
  }
  return null;
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  let token = document.createElement('div');
  token.classList.add("token");
  token.classList.add(`p${currPlayer}`);
  token.style.top = -50 * (y + 2);

  const tokenPlacement = document.getElementById(`${y}-${x}`);
  tokenPlacement.append(token);
}

/** endGame: announce game end */

function endGame() {
  // TODO: pop up alert message
  setTimeout(() => {
    alert(`Hey Player ${currPlayer}! You won motherfucker!`);
  }, 200)
}

/** handleClick: handle click of column top to play piece */

function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;

  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  board[y][x] = currPlayer;
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    return endGame();
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if (board.every((row) => row.every((cell) => cell))) {
    return endGame('Tie!');
  }


  //my idea?
  //
  // if (board.every(function(row){
  //   return row.every(function(cell){
  //     return cell;
  //   })

  // })){
  //   return endGame();
  // }

  // switch players
  // TODO: switch currPlayer 1 <-> 2
  currPlayer === 1 ? currPlayer = 2 : currPlayer = 1;
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }

  // TODO: read and understand this code. Add comments to help you.

  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];

      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
