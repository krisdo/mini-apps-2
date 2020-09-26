import React, {useState, useEffect, createRef} from 'react';
import NumberOfPins from './NumberOfPins.jsx';
import ScoreBoard from './ScoreBoard.jsx';

const App = (props) => {

  let contextRef = createRef();

  const [scores, setScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [totalScore, setTotalScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [frame, setFrame] = useState(0);
  const [turn, setTurn] = useState(0);
  

  const turnNumber = points => {
    if(frame < 9) {
      if(turn < 1) { //one more turn
        if(points === 10) {
          setTurn(0);
          setCurrentScore(0);
        } else {
          setTurn(turn+1);
        }
        
      
      } else { //no more turns, next frame
        setTurn(0);
        setFrame(frame+1);
        setCurrentScore(0);
    
      }
    } else { //frame 10 has 3 turns
      if(turn < 2) {
        setTurn(turn+1);
      } 

    }
  }

  const getTotalScore = () => {

    setTotalScore(scores.reduce( (accumulator, current) => accumulator + current));
    setScores()
    

  }

  const calculateScore = (e) => {
    console.log('turn', turn);
    console.log('frame', frame);
    let value = Number(e.target.value);
  
    scores[frame] = scores[frame] + value;
    setCurrentScore(currentScore+value);
    turnNumber(value);
    if(frame === 10) { //end of game

    }
  
     console.log(totalScore);
    
  
  }

  const points = () => {

    let value = 1;
    const points = new Array(10).fill(0).map( ea => value++);
    return points;
  }


   return(
      <div>
        Click on the Number of Pins That Were Knocked Down
        <div>{scores.map( (val, i) => 
        <NumberOfPins key={i*10} id={i} disableButton={10-currentScore<i || turn > 2 || currentScore === 10} calculateScore={calculateScore}/>) }
        </div>
        <ScoreBoard id={points()} totalScore={totalScore} scores={scores}/>
      </div>

    )
  
} 

export default App;