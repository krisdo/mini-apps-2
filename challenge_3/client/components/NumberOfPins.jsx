import React from 'React';

const NumberOfPins = ({id, calculateScore, disableButton}) => (

<button id={id} value={id} onClick={calculateScore} disabled={disableButton}>{id} </button>

)

export default NumberOfPins;