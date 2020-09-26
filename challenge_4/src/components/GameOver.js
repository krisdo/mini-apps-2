import React from 'react';
import Button from '@material-ui/core/Button';

const GameOver = ({ hasWon, reset}) => (
 
    <div className="gameover-msg">
    <header>GAME OVER</header> 
    
      {hasWon ?
        <span> WINNER! YOU WON! </span> : 
        <span> YOU LOST! </span> }

      <div>
      <Button onClick={reset} color="secondary"> New Game </Button>
      </div>
      </div> 
)
 
export default GameOver;