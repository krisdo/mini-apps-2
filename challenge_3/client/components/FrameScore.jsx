import React from 'React';

const FrameScore = ({score, frame}) => (

  <td colSpan="6">
  {frame <= 10 ?
    score : null }
  </td>
 
)

export default FrameScore;