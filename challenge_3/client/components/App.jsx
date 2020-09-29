import React from 'react';
import NumberOfPins from './NumberOfPins.jsx';
import ScoreBoard from './ScoreBoard.jsx';
import { v4 as uuidv4 } from 'uuid';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      scoreboard: [[0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0,0], [0]],
      frameScore: 0,
      frame: 0,
      turn: 0
    };
    this.turnNumber = this.turnNumber.bind(this);
    this.calculateScore =  this.calculateScore.bind(this);
    this.disableButton = this.disableButton.bind(this);
     
  }

  turnNumber(points) {

    let {turn, frame, frameScore} = this.state;
    
    if(frame < 9) {
      if(turn < 1) { //one more turn
        if(points === 10) { //strike
          this.setState({
            turn: 0,
            frame: this.state.frame+1,
            frameScore: 0
          })
        } else {
          this.setState({
            turn: this.state.turn+1
          })

        }
      } else { //no more turns, next frame
        this.setState({
          turn: 0,
          frame: this.state.frame+1,
          frameScore: 0
        })
      }
    } else { //frame 10 has 3 turns with strikes and spares
      if (turn === 1) { //spare or stirke on this turn gets one more
        if(points === 10 || points !== 0 && frameScore === 10) {
          this.setState({
            turn: this.state.turn+1
          })
        }
      } else if (turn === 2) { //reset
        this.setState({
          turn: 0,
          frameScore: 0
        })
      } else {
        this.setState({
          turn: this.state.turn+1
        })
      }
     
  }
}

  calculateScore (e) {
    
    let value = Number(e.target.value);
    
    let { scoreboard, turn, frame, frameScore } = this.state;
    let scoreboardClone = [...scoreboard]; 

    scoreboardClone[frame][turn] = value;
    
    this.setState({
      frameScore: frameScore + value,
      scoreboard: scoreboardClone
    })
   
    this.turnNumber(value); //change turn # and/or frame in state
          
  }

  disableButton(value, index){
    if(this.state.frame <9) {
      if( 10 - this.state.frameScore < index ||
        this.state.turn > 2 ||
        this.state.frameScore === 10 ) {
          return true;
        }
    } else if (this.state.frame === 9 && this.state.turn === 3){
      return true;
    }
    false;
  }

  render () {
     return(
      <div>
        Click on the Number of Pins That Were Knocked Down
        <div>{this.state.scoreboard.map( (val, i) => 
        <NumberOfPins key={i*10} id={i} disableButton={this.disableButton(val, i)} calculateScore={this.calculateScore}/>) }
        </div>
        <ScoreBoard key={uuidv4()} scores={this.state.scoreboard} scoresPerFrame={this.totalScores} />
      </div>

    )
  
  } 
}

export default App;