import React from 'React';

const style = {
  border: "2px solid #095484",
  padding: "5px"
}

const Frame = ({id, score}) => (



  <tbody>
    <tr >
      <th >
   
        {id+1 <= 10 ? id+1 : "Total Score"}
      </th>
    </tr>

    <tr>
     <th style={style}>
        {score}
      </th>
    </tr>     
  </tbody>
   

)

export default Frame;