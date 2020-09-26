import React from 'react';
import Board from './Board.js';
import { Typography } from '@material-ui/core';

const App = () => (

    <div className="Minesweeper">
      <Typography variant="h3" className="Minesweeper-header">
        Let's Play Minesweeper
      </Typography>
      <Board/>
    </div>
);

export default App;
