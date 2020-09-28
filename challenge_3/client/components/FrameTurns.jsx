import React from 'React';

const style = {
  borderLeft: "1px solid #095484",
  borderBottom: "1px solid #095484"
}

const renderScoresPerTurn = (scores) => {
  if(scores.length === 2) {
    if (scores[0] === 10) {
        return 'X';
    } else if (scores[0] + scores[1] === 10 ){
        return '/';
    } else {
      return scores[1];
    }
  }
}

const FrameTurns = ({frame, scores}) => {


  return(
  <>
    {frame + 1 < 10 ?
      <>
        <td>
          {scores[0] !== 10 && scores[0]}
        </td>
        <td style={style}>
          {renderScoresPerTurn(scores)}
        </td>
      </>
    : 
    <>
    <td>
      {scores[0] === 10 ? 'X' : scores[0]}
    </td>
    <td style={style}>
      {renderScoresPerTurn(scores)}
    </td>
    <td style={style}>
    {scores[2] === 10 ? 'X' : scores[2]}
    </td>
    </>
    }
    </>
  )
}

export default FrameTurns;