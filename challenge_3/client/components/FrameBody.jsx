import React from 'React';
import FrameTurns from './FrameTurns.jsx';
import FrameScore from './FrameScore.jsx';


const style = {
  border: "2px solid #095484",
  textAlign: "center",
  verticalAlign: "middle",
  
}

const Frame = ({id, scores}) => (



  
 
    <td style={style}>
        <FrameTurns scores={id, scores}/>
        <FrameScore score={score}/>
    </td>
  
   

)

export default Frame;