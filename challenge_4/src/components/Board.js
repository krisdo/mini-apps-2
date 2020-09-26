import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Tile from './Tile.js';
import * as allActions from '../actions';
import GameOver from './GameOver';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Container from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

const customRowStyle = { 
  width: "5px",
  height: "5px",
  borderBottom: "none"
};

class Board extends Component {

  updateBoard = currentTile => {

    let { board } = this.state;

    board.map( row => row.map( (tile) => {
        tile.isClicked = tile.id === currentTile.id ? true : false;
        return tile;
      }
    ));

    return board;
  };

  addTile = data => {
    return <Tile key={'key' + data.id} data={data} onClick={() => this.handleClick(data)} />;
  };

  handleClick = tileObj => {

    const { actions } = this.props;
    
    actions.clickTile(this.props.board, tileObj);

      if (tileObj.hasMine) {
        actions.gameOver();
      }
 
  };

  reset = () => {
    const {actions} = this.props;
    actions.generateBoard();
  }

  renderBoard = () => {
    const { board } = this.props;
  
    return board.map( (row, index) => {

      return < TableRow key={'row' + index} style={customRowStyle}>{row.map(tile => this.addTile(tile))}</TableRow>

    });
  
  };


  render() {
    const { hasWon, isGameOver } = this.props;
    return (
      <Container >
        <Table className='board'>
         <TableBody>
        {this.renderBoard()}
        </TableBody>
      </Table>
      { isGameOver ?
      <GameOver hasWon={hasWon} reset={this.reset}/> : null}
      </Container>
    );
  }
}


const mapStateToProps = state => {

  const { board, hasWon, isGameOver } = state.status;
  
  return {
    board,
    hasWon,
    isGameOver
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(allActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
