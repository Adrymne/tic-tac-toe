import * as R from 'ramda';
import findWinner from 'observers/judge/judge';
import { EMPTY, NOUGHT, CROSS } from 'types';

export const score = (player, winner) =>
  winner ? (player === winner ? 10 : -10) : 0;

export const getAvailableMoves = cells =>
  cells.reduce(
    (xs, cell, index) => (cell === EMPTY ? xs.concat(index) : xs),
    []
  );

const nextTurn = player => (player === NOUGHT ? CROSS : NOUGHT);

// movePredicate :: Boolean -> ((Result, Result) -> Result)
const movePredicate = isPlayerActive =>
  isPlayerActive ? R.maxBy(R.prop('score')) : R.minBy(R.prop('score'));
// pickBestMove :: ((Result, Result) -> Result) -> [Result] -> Result
export const pickBestMove = (isPlayerActive, results) =>
  R.reduce(movePredicate(isPlayerActive), R.head(results), R.tail(results));

// minimax :: Cells -> Player -> Int
export const minimax = R.curry((player, active, move, cells) => {
  const { isEnded, winner } = findWinner(cells);
  if (isEnded) {
    return {
      score: score(player, winner),
      move
    };
  }

  const results = R.map(
    move =>
      minimax(player, nextTurn(active), move, R.update(move, player, cells)),
    getAvailableMoves(cells)
  );

  return pickBestMove(active === player, results);
});
