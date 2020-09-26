import React from 'React';

const Frame = ({id, score}) => (


  <div>
    {id}
    <p>{score > 0 && score}</p>

  </div>

      
  

)

export default Frame;