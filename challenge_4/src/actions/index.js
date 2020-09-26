import * as types from '../actiontypes/index.js';

export const generateBoard = () => {
  return {
    type: types.GENERATE_BOARD,
  };
};

export const clickTile = (board, tile) => {
  return {
    type: types.CLICK_TILE,
    board,
    tile
  };
};

export const gameOver = () => {
  return {
    type: types.GAME_OVER
  };
};
