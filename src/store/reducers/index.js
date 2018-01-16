import { prop, pipe, map, splitEvery, uncurryN } from 'ramda';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import game, * as gameSelectors from './game';
import score from './score';
import p1Mark, * as markSelectors from './mark';

export default combineReducers({ p1Mark, score, game });

// SELECTORS
export const getP1Mark = prop('p1Mark');
export const getScore = prop('score');
// // marksSelector :: State -> (Cell -> BoardCell)
const toMarkSelector = pipe(prop('p1Mark'), markSelectors.toMarkSelector);
// boardSelector :: State -> Cells
export const cellsSelector = pipe(prop('game'), gameSelectors.cellsSelector);

// mapBoard :: (Cell -> BoardCell, Cells) -> Board
const mapBoard = uncurryN(2, toMark => pipe(map(toMark), splitEvery(3)));
// getBoard :: State -> Board
export const getBoard = createSelector(toMarkSelector, cellsSelector, mapBoard);
