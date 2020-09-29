import React from 'react';
import Board from './Board.js';
import { Typography, Container } from '@material-ui/core';

const App = () => (
    <Container className="Minesweeper" alignContent='center' justify="center" maxWidth="md">
      <Typography variant="h3" className="Minesweeper-header">
        Let's Play Minesweeper
      </Typography>
      <Board/>
    </Container>
);

export default App;
