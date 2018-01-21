import * as R from 'ramda';
import { EMPTY } from 'types';

const CENTER = 4;
const CORNERS = [0, 2, 6, 8];

const notEmptyAt = R.curry((cells, index) => cells[index] !== EMPTY);

export const isCornerMove = cells => R.any(notEmptyAt(cells), CORNERS);
export const isCenterMove = cells => notEmptyAt(cells, CENTER);

const getEdgeResponses = R.cond([
  // top-middle
  [notEmptyAt(R.__, 1), () => [0, 2, 4, 7]],
  // middle-left
  [notEmptyAt(R.__, 3), () => [0, 6, 4, 5]],
  // middle-right
  [notEmptyAt(R.__, 5), () => [2, 8, 4, 3]],
  // bottom-middle
  [notEmptyAt(R.__, 7), () => [6, 8, 4, 1]]
]);

export const turns = {
  0: () => R.range(0, 9),
  // 1 :: Cells -> [Number]
  1: R.cond([
    [isCornerMove, () => [CENTER]],
    [isCenterMove, () => CORNERS],
    [R.T, getEdgeResponses]
  ])
};

const pickRandom = possibleMoves =>
  possibleMoves[Math.floor(Math.random() * possibleMoves.length)];

export default {
  isDefined: turn => R.has(turn, turns),
  execute: R.curry((cells, turnNum) => ({
    move: pickRandom(turns[turnNum](cells))
  }))
};
