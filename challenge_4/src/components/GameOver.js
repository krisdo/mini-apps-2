import React from 'react';
import Button from '@material-ui/core/Button';

const GameOver = ({ hasWon, reset, close}) => {

  const restart = () => {
    reset()
    close()

  }
 
  return (
    <div className="gameover-msg">
       {hasWon ?
        <span> WINNER! YOU WON! </span> : 
        <span> YOU LOST! </span> }

      <p style={{margin: "20px"}}>
      <Button onClick={restart} variant='contained' color="secondary"> New Game </Button>
      </p>
      </div> 
  )
}
 
export default GameOver;