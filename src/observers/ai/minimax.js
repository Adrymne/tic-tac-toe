import * as R from 'ramda';
import findWinner from './judge';
import { EMPTY, NOUGHT, CROSS } from 'types';

// score :: Mark -> Mark -> Int
export const score = (player, winner) =>
  winner ? (player === winner ? 10 : -10) : 0;

// getAvailableMoves :: Cells -> [Index]
export const getAvailableMoves = cells =>
  cells.reduce(
    (xs, cell, index) => (cell === EMPTY ? xs.concat(index) : xs),
    []
  );

// nextTurn :: Mark -> Mark
const nextTurn = player => (player === NOUGHT ? CROSS : NOUGHT);

// movePredicate :: Boolean -> ((Result, Result) -> Result)
const movePredicate = isPlayerTurn =>
  isPlayerTurn ? R.maxBy(R.prop('score')) : R.minBy(R.prop('score'));
// pickBestMove :: Boolean -> [Result] -> Result
export const pickBestMove = R.curry((isPlayerTurn, results) =>
  R.reduce(movePredicate(isPlayerTurn), R.head(results), R.tail(results))
);

// MINIMAX

let minimax;

const evaluateMove = R.curry((player, active, cells, move) =>
  minimax(player, nextTurn(active), R.update(move, player, cells), move)
);
// minimax :: Mark -> Mark -> Cells -> Index -> Result
minimax = (player, active, cells, move = undefined) => {
  const { isEnded, winner } = findWinner(cells);
  if (isEnded) {
    return { score: score(player, winner), move };
  }

  return R.pipe(
    getAvailableMoves,
    R.map(evaluateMove(player, active, cells)),
    pickBestMove(active === player)
  )(cells);
};

export default minimax;
