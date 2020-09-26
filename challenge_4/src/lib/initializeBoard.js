import generateBoard from './generateBoard';
import generateMineCoordinates from './generateMineCoordinates';

const initializeBoard = (rows = 10, cols = 10, mines = 10) => {

  let board = generateBoard(rows, cols);

  let minesPlanted = 0;

  while( minesPlanted < mines) {

    let row = generateMineCoordinates(rows);
    let col = generateMineCoordinates(cols);
    let tile = board[row][col];
    
    if (!tile.hasMine) {
      tile.hasMine = true;
      tile.value = "X";
      minesPlanted++;
    }

  }

  return board;
}

export default initializeBoard;