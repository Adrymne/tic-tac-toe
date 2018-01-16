import { __, propOr, prop, pipe, map, splitEvery, uncurryN } from 'ramda';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { NOUGHT, CROSS, EMPTY, P1, P2 } from 'types';
import game, * as gameSelectors from './game';

const p1IsNought = (state = true, action) => state;

export default combineReducers({ p1IsNought, game });

// marksSelector :: State -> (Cell -> BoardCell)
const toMarkSelector = state =>
  state.p1IsNought
    ? propOr(EMPTY, __, { [P1]: NOUGHT, [P2]: CROSS })
    : propOr(EMPTY, __, { [P1]: CROSS, [P2]: NOUGHT });
// boardSelector :: State -> Cells
export const cellsSelector = pipe(prop('game'), gameSelectors.cellsSelector);

// mapBoard :: (Cell -> BoardCell, Cells) -> Board
const mapBoard = uncurryN(2, toMark => pipe(map(toMark), splitEvery(3)));

// getBoard :: State -> Board
export const getBoard = createSelector(toMarkSelector, cellsSelector, mapBoard);
