const generateBoard = (rows, cols) => {

  //create 2d array to represent Minesweeper board
  let board =  new Array(rows).fill(0).map( ea => new Array(cols).fill(0));

  let id = 0;

  //each tile of board will be an object for ref
  board = board.map( row => row.map( (tile) => {
   return tile = {
      id: id++,
      value: 0,
      isRevealed: false,
      hasMine: false
    }
  }));

  return board;
}

export default generateBoard;