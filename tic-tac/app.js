const CELLS_VERT = 3
const CELLS_HOR = 3
const EMPTY_SYM = ' '
let FIRST_PLAYER_SYM = 'X'
let SECOND_PLAYER_SYM = 'O'
let FIRST_PLAYER_COLOR = 'red'
let SECOND_PLAYER_COLOR = 'blue'

let gameBoard = [];

let isPlayerTurn = true

window.onload = function() {
  initializeBoard()
}

function initializeBoard() {
  gameBoard = []
  for (let row = 0; row < CELLS_VERT; row++) {
    let gameBoardRow = []
    for (let col = 0; col < CELLS_HOR; col++) {
      gameBoardRow.push(EMPTY_SYM)
    }
    gameBoard[row] = gameBoardRow;
  }

}

function makeMove(col, row) {
  let tile = gameBoard[row][col];

  if (tile === EMPTY_SYM) {
    let button = document.getElementById('b' + col + row)
    if (isPlayerTurn) {
      button.innerText = FIRST_PLAYER_SYM
      button.style.color = FIRST_PLAYER_COLOR
      gameBoard[row][col] = FIRST_PLAYER_SYM
    } else {
      button.innerText = SECOND_PLAYER_SYM
      button.style.color = SECOND_PLAYER_COLOR
      gameBoard[row][col] = SECOND_PLAYER_SYM
    } 
    
    if (gameOver()) {
      let gameResult = document.getElementById('gameResult')
      if (isPlayerTurn) {
          gameResult.innerHTML = `<span style='color: ${FIRST_PLAYER_COLOR}'>Player</span> has won!`
      } else {
          gameResult.innerHTML = `<span style='color: ${SECOND_PLAYER_COLOR}'>Computer</span> has won!`
      }
      let gameBoard = document.getElementById('gameBoard')
      gameBoard.style.pointerEvents = 'none'
      return
    }
    isPlayerTurn = !isPlayerTurn

    if (!isPlayerTurn && isThereAnEmptyCell()) {
      randomCompMove()
    }
    }
}

function randomCompMove() {
  let randomRow = Math.floor(Math.random() * CELLS_VERT);
  let randomCol = Math.floor(Math.random() * CELLS_HOR);
  let randomTile = gameBoard[randomRow][randomCol];

  while (randomTile !== EMPTY_SYM) {
    randomRow = Math.floor(Math.random() * CELLS_VERT);
    randomCol = Math.floor(Math.random() * CELLS_HOR);
    randomTile = gameBoard[randomRow][randomCol];
  }
  makeMove(randomCol, randomRow)
}

function isThereAnEmptyCell() {
  for (let row = 0; row < gameBoard.length; row++) {
    let currentRow = gameBoard[row];
    for (let col = 0; col < currentRow.length; col++) {
      let tile = gameBoard[row][col];
      if (tile === EMPTY_SYM) {
        return true
      }
    }
  }
  return false
}

function gameOver() {
  return isHorizontalWin() || isVerticalWin() || isDiagonalWin()
}

function isHorizontalWin() {
  let playerValue = 1;
  let enemyValue = -1;


  for (let row = 0; row < gameBoard.length; row++) {
    let currentRow = gameBoard[row]
    let rowSum = 0;
    for (let col = 0; col < currentRow.length; col++) {
      let tile = currentRow[col];
      if (tile === FIRST_PLAYER_SYM) { rowSum += playerValue } 
      else if (tile === SECOND_PLAYER_SYM) { rowSum += enemyValue }
    }


  if (rowSum === playerValue * CELLS_HOR || rowSum === enemyValue * CELLS_HOR) {
    return true
  }
}
  return false
}

function isVerticalWin() {

  let playerValue = 1;
  let enemyValue = -1;


  for (let col = 0; col < CELLS_VERT; col++) {
    let colSum = 0;
    for (let row = 0; row < gameBoard.length; row++) {
      let tile = gameBoard[row][col];
      if (tile === FIRST_PLAYER_SYM) { colSum += playerValue }
      else if (tile === SECOND_PLAYER_SYM) { colSum += enemyValue }
    }

    if (colSum === playerValue * CELLS_VERT || colSum === enemyValue * CELLS_VERT) {
      return true
    }
  }
  return false
}

function isDiagonalWin() {

  let playerValue = 1;
  let enemyValue = -1;

  let firstDiagSum = 0;
  let secondDiagSum = 0;

  for (let row = 0, col = 0, rowEnd = CELLS_VERT - 1;
     row < CELLS_VERT && col < CELLS_HOR;
     row++, col++, rowEnd-- ) {

    let tile = gameBoard[row][col]
    if (tile === FIRST_PLAYER_SYM) { firstDiagSum += playerValue }
    else if (tile === SECOND_PLAYER_SYM) { firstDiagSum += enemyValue} 

    tile = gameBoard[rowEnd][col]
    if (tile === FIRST_PLAYER_SYM) { secondDiagSum += playerValue }
    else if (tile === SECOND_PLAYER_SYM) { secondDiagSum += enemyValue} 
  }
  return firstDiagSum === 3 || firstDiagSum === -3 || secondDiagSum === 3 || secondDiagSum === -3
}

function resetBoard() {
  initializeBoard()
  for (let row = 0; row < CELLS_VERT; row++) {
    for (let col = 0; col < CELLS_HOR; col++) {
      let button = document.getElementById('b' + col + row)
      button.innerText = " ";
    }
  }
  let gameResult = document.getElementById('gameResult')
  gameResult.innerText = 'Tic Tac Toe!'

  let gameBoard = document.getElementById('gameBoard')
  gameBoard.style.pointerEvents = 'auto'
  isPlayerTurn = true
}