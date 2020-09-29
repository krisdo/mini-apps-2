import { v4 as uuidv4 } from 'uuid';
import FrameHeader from './FrameHeader.jsx';
import Frames from './Frames.jsx';
import React from 'react';

const style = {
  border: "5px solid #095484",
  marginTop: "20px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: '5px',
  width: '500px'
}



const ScoreBoard = ({scores, scoresPerFrame}) => (
  <div className="Container">
  <table id="table" className="ScoreBoard" cellPadding="1" cellSpacing="0" style={style}>
    <thead>
      <tr>
        {scores.map( (value, index) =><FrameHeader key={uuidv4()} frame={index+1} />)}
      </tr>
    </thead>
    <tbody>
      
        <Frames scores={scores}/>
      
    </tbody>
  </table>
  </div>

)

export default ScoreBoard;