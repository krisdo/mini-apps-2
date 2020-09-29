import React from 'React';

const FrameHeader = ({frame}) => (
   
  <th colSpan='6'>
    {frame <= 10 ? frame : "Total Score"}
  </th>
    
)

export default FrameHeader;