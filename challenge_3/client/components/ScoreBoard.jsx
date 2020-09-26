import React from 'React';
import Frame from './Frame.jsx';

const style = {
  border: "5px solid #095484",
  marginTop: "20px"
}

const styleCol = {
  margin: "5px"
}

const ScoreBoard = ({totalScore, scores, id}) => (

  <table style={style}>
    
    {scores.map( (value, index) =><th style={styleCol}><Frame key={index} id={index} score={value}/></th>)}
  
  </table>

 
)

export default ScoreBoard;