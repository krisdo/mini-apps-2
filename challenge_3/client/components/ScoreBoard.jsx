import { v4 as uuidv4 } from 'uuid';
import FrameHeader from './FrameHeader.jsx';
import FrameScore from './FrameScore.jsx';
import FrameTurns from './FrameTurns.jsx';
import React from 'react';

const style = {
  border: "5px solid #095484",
  marginTop: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: '5px'
}


    const styleRow = {
    textAlign: "center",
    verticalAlign: "middle"
  }

const ScoreBoard = ({scores, scoresPerFrame}) => (

  <table className={"center"} cellPadding="0" cellSpacing="0" style={style}>
    <thead>
      <tr>
        {scores.map( (value, index) =><FrameHeader key={uuidv4()} frame={index} />)}
      </tr>
    </thead>
    <tbody>
      <tr>
        {scores.map( (array, index) => <FrameTurns key={uuidv4()} frame={index} scores={array}/> )}
      </tr>
      <tr>
        {/* {scoresPerFrame && scoresPerFrame.map( (value, index) =><FrameScore key={uuidv4()}  id={index} score={value}/>)} */}
      </tr>

    </tbody>
  </table>

)

export default ScoreBoard;