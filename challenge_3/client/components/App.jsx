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

//   getTotalScorePerFrame(array) {

//     let scoreboard = array.slice(0, 10);

//      return scoreboard.map( (frame, index, arr) => {
//       let score = 0;

//       if (frame[0] === 10) { //first strike
//         score = 10;
//         if(index === 9) { //first strike is in 10th frame
//           if (frame[1] === 10) { //2nd strike
//             score = score + 10 + frame[2]; //add all 3 shots in 10th frame
//           } else {
//             score = score + frame[1]; //add only 2nd shot in 10th frame
//           }
//         } else {
//           if (arr[index+1][0] === 10) { //2nd strike then add the 3rd shot
//             if (index === 8) { //9th frame, 3rd shot is 2nd in 10th frame
//               score = score + 10 + arr[index+1][1];
//             } else { //frames 1-7
//               score = score + 10 + arr[index+2][0];
//             }
//           } else {
//             score = score + arr[index+1][0]; //no 2nd strike
//           }
//         } 
//       } else if (frame[0] !== 10 && frame[0] + frame[1] === 10){ //spare
//         if(index === 9) {//10th frame
//           score = 10 + frame[2];
//         } else {
//           score = 10 + arr[index+1][0];  //add first shot of next frame
//         }
//       } else { //no strikes or spares
//         score = frame[0] + frame[1];
//       }
      
//     return score;
//   });
// }

  calculateScore (e) {
    
    let value = Number(e.target.value);
    
    let { scoreboard, turn, frame, frameScore } = this.state;
    let scoreboardClone = [...scoreboard]; 

    scoreboardClone[frame][turn] = value;
    // let scoresPerFrame = this.getTotalScorePerFrame(scoreboardClone);
    
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