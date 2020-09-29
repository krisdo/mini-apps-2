import React, {useState, useEffect, createRef} from 'react';
import { v4 as uuidv4 } from 'uuid';
import FrameTurns from './FrameTurns.jsx';
import FrameScore from './FrameScore.jsx';


const Frames = ({scores}) => {

  let contextRef = createRef();

  const [scoresPerBowl, setScoresPerBowl] = useState(scores);
  const [scoresPerFrame, setScoresPerFrame] = useState(scoresPerFrame);

  const getTotalScores = (array) => {

     let scoresPerFrame = array.map( (frame, index, arr) => {
      
        let score = 0;
      if(index < 10) {
        if (frame[0] === 10) { //first strike
          score = 10;
          if(index === 9) { //first strike is in 10th frame
            if (frame[1] === 10) { //2nd strike
              score = score + 10 + frame[2]; //add all 3 shots in 10th frame
            } else {
              score = score + frame[1]; //add only 2nd shot in 10th frame
            }
          } else {
            if (arr[index+1][0] === 10) { //2nd strike then add the 3rd shot
              if (index === 8) { //9th frame, 3rd shot is 2nd in 10th frame
                score = score + 10 + arr[index+1][1];
              } else { //frames 1-7
                score = score + 10 + arr[index+2][0];
              }
            } else {
              score = score + arr[index+1][0]; //no 2nd strike
            }
          } 
        } else if (frame[0] !== 10 && frame[0] + frame[1] === 10){ //spare
          if(index === 9) {//10th frame
            score = 10 + frame[2];
          } else {
            score = 10 + arr[index+1][0];  //add first shot of next frame
          }
        } else { //no strikes or spares
          score = frame[0] + frame[1];
        }
        
    return score;
      } else {
        return 0;
      }
  });

  let totalScore = scoresPerFrame.reduce((accumulator, current) => accumulator + current);
    let scoresPerBowlClone = [...scoresPerBowl];
    scoresPerBowlClone[10] = totalScore;

  setScoresPerFrame(scoresPerFrame);
  setScoresPerBowl(scoresPerBowlClone);
}

useEffect( () => scores ? getTotalScores(scores) : undefined, [scores]);

  return(
    <>
    <tr>
        {scoresPerBowl ? scoresPerBowl.map( (scores, index) => <FrameTurns key={uuidv4()} scores={scores} frame={index+1}/>) : null}
        </tr> 
        <tr>
        {scoresPerFrame ?  scoresPerFrame.map( (score, index) => <FrameScore key={uuidv4()} score={score} frame={index+1}/>) : null}
    </tr>
    </>
  )

  }

export default Frames;