import React from 'react';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import SentimentVeryDissatisfiedRoundedIcon from '@material-ui/icons/SentimentVeryDissatisfiedRounded';

const customColumnStyle = { 
  width: "5px",
  height: "30px",
  borderBottom: "none",
  padding: '0px'
};

const Tile = ({data, onClick}) => (

  <TableCell className="tile" onClick={onClick} style={customColumnStyle}>
    <Button variant="contained" style={customColumnStyle} disabled={data.isRevealed}>
    {!data.isRevealed && <EmojiEmotionsRoundedIcon/>}
    {(data.isRevealed && data.value !== "X") ? data.value : null}
    {data.isRevealed && data.value === "X" ? <SentimentVeryDissatisfiedRoundedIcon/> : null}
    </Button>
  </TableCell>

)

export default Tile;
