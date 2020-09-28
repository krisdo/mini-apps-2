import React from 'React';

const FrameHeader = ({frame}) => (
   
  <th>
    {frame+1 <= 10 ? frame+1 : "Total Score"}
  </th>
    
)

export default FrameHeader;