import { prop, pipe, splitEvery } from 'ramda';
import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { P1, P2 } from 'types';
import game, * as gameSelectors from './game';
import score from './score';
import p1, * as p1Selectors from './p1';
import p2, * as p2Selectors from './p2';

export default combineReducers({ p1, p2, score, game });

// SELECTORS
export const getP1Mark = pipe(prop('p1'), p1Selectors.getP1Mark);
export const getP2Mark = pipe(prop('p1'), p1Selectors.getP2Mark);
export const getP2Type = pipe(prop('p2'), p2Selectors.getP2Type);
export const isVsCom = pipe(prop('p2'), p2Selectors.isVsCom);
export const getScore = prop('score');
export const getCells = pipe(prop('game'), gameSelectors.cellsSelector);
export const isGameInProgress = pipe(
  prop('game'),
  gameSelectors.isGameInProgress
);

// getBoard :: State -> Board
export const getBoard = createSelector(getCells, splitEvery(3));

export const getActivePlayer = createSelector(
  getP1Mark,
  pipe(prop('game'), gameSelectors.getActivePlayer),
  (p1Mark, activePlayer) => (p1Mark === activePlayer ? P1 : P2)
);
