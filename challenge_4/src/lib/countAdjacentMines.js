import isTileOnBoard from './isTileOnBoard';

const countAdjacentMines = (board, row, col) => {

  let mineCount = 0;

  if(isTileOnBoard(board, row-1, col-1) && board[row-1][col-1].hasMine) { //check top left
    mineCount++;
  }

  if(isTileOnBoard(board, row-1, col) && board[row-1][col].hasMine) { //check above
    mineCount++;
  } 

  if(isTileOnBoard(board, row-1, col+1) && board[row-1][col+1].hasMine) { //check top right
    mineCount++;
  } 
  
  if(isTileOnBoard(board, row+1, col-1) && board[row+1][col-1].hasMine) { //check bottom left
    mineCount++;
  } 

  if(isTileOnBoard(board, row+1, col) && board[row+1][col].hasMine) { //check below
    mineCount++;
  }

  if(isTileOnBoard(board, row+1, col+1) && board[row+1][col+1].hasMine) { //check bottom right
    mineCount++;
  }

  if(isTileOnBoard(board, row, col-1) && board[row][col-1].hasMine) { //check left
    mineCount++;
  }

  if(isTileOnBoard(board, row, col+1) && board[row][col+1].hasMine) { //check  right
    mineCount++;
  }

  return mineCount;

}

export default countAdjacentMines;