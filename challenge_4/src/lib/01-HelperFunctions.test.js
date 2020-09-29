import generateBoard from './generateBoard';
import isTileOnBoard from './isTileOnBoard';
import generateMineCoordinates from './generateMineCoordinates';
import initializeBoard from './initializeBoard';
import hasWon from './hasWon';
import updateBoard from './updateBoard';
import countAdjacentMines from './countAdjacentMines';
import {testBoard, winningBoard} from './02-sample-boards';


describe("Minesweeper Helper Functions", () => {

  test('Should Generate a 10x10 Board', () => {
    const board = generateBoard(10,10);
    expect(board.length).toBe(10);
    expect(board[0].length).toBe(10);
  })

  test('Should Generate Mine Coordinates for 3x3 Board ', () => {
    const coordinates1 = generateMineCoordinates(3);
    const coordinates2 = generateMineCoordinates(3);
    const coordinates3 = generateMineCoordinates(3);
    expect(coordinates1).toBeGreaterThanOrEqual(0);
    expect(coordinates1).toBeLessThan(3);
    expect(coordinates2).toBeGreaterThanOrEqual(0);
    expect(coordinates2).toBeLessThan(3);
    expect(coordinates2).toBeGreaterThanOrEqual(0);
    expect(coordinates3).toBeLessThan(3);
  })

  test('Tile should be on 10x10 board', () => {
    const board = generateBoard(10,10);
    const checkTile = isTileOnBoard(board,0,9);
    expect(checkTile).toBe(true);
  })

  test('Tile should not be on 10x10 board', () => {
    const board = generateBoard(10,10);
    const checkTile = isTileOnBoard(board,10,9);
    expect(checkTile).toBe(false);
  })
  
  test('Should Initialize a 5x5 board with 10 mines', () => {
    const board = initializeBoard(5,5,10);
    const mines = board.reduce( (acc,row) => {
      row.forEach( tile => {
      if (tile.hasMine) {
         acc++;
      } 
     })
     return acc}, 0);
    expect(board.length).toBe(5);
    expect(board[0].length).toBe(5);
    expect(mines).toBe(10);
  })

  test('Should Count 3 Adjacent Mines', () => {
    const adjacentMines = countAdjacentMines(testBoard,0,2);
    expect(adjacentMines).toBe(3);
  })

  test('Should Return False for Winning Minesweeper', () => {
    const win = hasWon(testBoard);
    expect(win).toBe(false);
  })

  test('Should Return True for Winning Minesweeper', () => {
    const win = hasWon(winningBoard);
    expect(win).toBe(true);
  })

  test('Should Update Minesweeper After Tile is Clicked', () => {
    const updatedBoard = updateBoard(
      testBoard,
      {hasMine: false,
      id: 3,
      isRevealed: false,
      value: 0});
    expect(updatedBoard[1][0].isRevealed).toBe(true);
    expect(updatedBoard[1][0].value).toBe(3);

    //reset board
    testBoard[0][2] = {
      value: 0,
      isRevealed: false
    };

  })

});

