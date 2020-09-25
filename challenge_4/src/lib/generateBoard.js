export const generateBoard = (rows = 10, cols = 10, mines = 10) => {

  //create 2d array to represent Minesweeper board
  let board =  new Array(rows).fill(0).map( ea => new Array(cols).fill(0));

  let id = 0;

  //each tile of board will be an object for ref
  board.forEach( (tile) => {
    tile = {
      id: id++,
      value: 0,
      isClicked: false,
      hasMine: false
    }
  });

  return board;
}