import React from 'React';

const style = {
  margin: "5px"
}

const NumberOfPins = ({id, calculateScore, disableButton}) => (


  <button id={id} value={id} onClick={calculateScore} disabled={disableButton} style={style}>
    {id}
  </button>


)

export default NumberOfPins;