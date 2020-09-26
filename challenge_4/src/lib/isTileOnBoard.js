const isTileOnBoard = (board, row, col) => {

  let rowMax = board.length;
  let colMax = board[0].length;

  //check if coordinates are within board ararys
  if(row >= 0 && row < rowMax && col >= 0 && col < colMax) {
    return true;
  }

  return false;

}

export default isTileOnBoard;