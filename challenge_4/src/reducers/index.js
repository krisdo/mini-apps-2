import { combineReducers } from 'redux';
import * as types from '../actiontypes/index';
import initializeBoard from '../lib/initializeBoard';
import updateBoard from '../lib/updateBoard';
import hasWon from '../lib/hasWon';

const initialState = {
  boardInitialized: false,
  board: initializeBoard(),
  hasWon: false,
  isGameOver: false
};

const gameplayReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GENERATE_BOARD: {
      let board = initializeBoard();
      const boardInitialized = board.length > 0 ? true : false;
      return {
        ...state,
        boardInitialized,
        board
      };
    }
    case types.CLICK_TILE: {

      const { board, tile} = action;

      return {
        ...state,
        boardInitialized: true,
        board: updateBoard(board, tile),
        hasWon: hasWon(board),
        isGameOver: tile.hasMine
      };
    }

    case types.GAME_OVER:
      return {
        ...state,
        hasWon: false,
        isGameOver: true
        
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({

  status: gameplayReducer

});

export default rootReducer;