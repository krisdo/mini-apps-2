const hasWon = ( board )  => {

  let result = true;

  //check if there are any tiles that hasn't been revealed or does not have a bomb
  board.forEach( row => row.forEach( (tile) => {
 
    if ( !tile.isRevealed && !tile.hasMine ) {
       result = false;
    }

  }))

  return result;

}

export default hasWon;