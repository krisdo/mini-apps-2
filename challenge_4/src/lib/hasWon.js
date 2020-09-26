const hasWon = ( board )  => {

  //check if there are any tiles that hasn't been revealed or does not have a bomb
  board.forEach( row => row.forEach( (tile) => {

    if ( !tile.isRevealed || !tile.hasMine ) {
      return false;
    }

  }))

  return true;

}

export default hasWon;