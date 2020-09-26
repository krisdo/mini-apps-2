import React from 'React';
import Frame from './Frame.jsx';

const ScoreBoard = ({totalScore, scores, id}) => (

  <table>

    {scores.map( value => <Frame key={value} id={value} score={value}/>)}
  
  </table>


)

export default ScoreBoard;