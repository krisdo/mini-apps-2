import React from 'React';
 
const style = {
  textAlign: "center",
  verticalAlign: "middle",
}

const FrameScore = ({score}) => (

  <>
    <td style={style}>
      {score}
    </td>
  </>
)

export default FrameScore;