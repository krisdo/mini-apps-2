import React from 'React';

// const style = {
//   borderLeft: "1px solid #095484",
//   borderBottom: "1px solid #095484"
// }

const renderScoresPerTurn = (scores) => {
  
    if (scores[0] === 10) {
        return 'X';
    } else if (scores[0] + scores[1] === 10 ){
        return '/';
    } else {
      return scores[1];
    }
}

const FrameTurns = ({frame, scores}) => {


  return(
  <>
    {frame < 10 &&
      <>
        <td colSpan='3'>
          {scores[0] !== 10 && scores[0]}
        </td>
        <td colSpan='3'>
          {renderScoresPerTurn(scores)}
        </td>
      </>
    } 
    {frame === 10 &&
    <>
    <td colSpan='2'>
      {scores[0] === 10 ? 'X' : scores[0]}
    </td>
    <td colSpan='2' >
      {renderScoresPerTurn(scores)}
    </td>
    <td colSpan='2'>
    {scores[2] === 10 ? 'X' : scores[2]}
    </td>
    </>
    }
    {frame === 11 &&
    <td colSpan='6'>
      {scores}
    </td>}
    </>
  )
}

export default FrameTurns;