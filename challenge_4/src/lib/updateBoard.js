import isTileOnBoard from './isTileOnBoard';
import countAdjacentMines from './countAdjacentMines';

const updateBoard = (board, tile) => {

  let row = Math.floor(tile.id/board[0].length);
  let col = tile.id % board[0].length;

  let currentTile = board[row][col];
  
  currentTile.isRevealed = true;
        
  if(!currentTile.hasMine) {
          
    currentTile.value = countAdjacentMines(board, row, col); //update current square value to # of adj mines
    
    if (currentTile.value > 0) {
        
      let clone = board.slice(0);
      return clone;
    } else { //if no adjacent mines, check mines in adj tiles

      let array = [-1, 0, 1];

      array.forEach( (i) => {
        array.forEach( (j) => {

          let newRow = row+i;
          let newCol = col+j;

          if (isTileOnBoard(board, newRow, newCol) && !board[newRow][newCol].isRevealed) {
            board = updateBoard(board, board[newRow][newCol]);
          }
          
        })
      })

      let clone = board.slice(0);
      return clone;
    }
  } else {
    let clone = board.slice(0);
      return clone;
  }
     
}

export default updateBoard;