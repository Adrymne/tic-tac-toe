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

// bestMoveFor :: Boolean -> Result -> Result -> Result
export const pickMoveFor = R.curry(
  (isPlayerTurn, a, b) =>
    isPlayerTurn
      ? R.maxBy(R.prop('score'), a, b)
      : R.minBy(R.prop('score'), a, b)
);

// MINIMAX

let minimax;

// evaluateMove :: Mark -> Mark -> Cells -> Index -> Result
const evaluateMove = R.curry((player, active, cells, move) => ({
  ...minimax(player, nextTurn(active), R.update(move, active, cells)),
  move
}));

// minimax :: Mark -> Mark -> Cells -> Result
minimax = (player, active, cells) => {
  const { isEnded, winner } = findWinner(cells);
  if (isEnded) {
    return { score: score(player, winner), move: undefined };
  }

  const moves = getAvailableMoves(cells);
  return R.transduce(
    R.map(evaluateMove(player, active, cells)),
    pickMoveFor(active === player),
    evaluateMove(player, active, cells, R.head(moves)),
    R.tail(moves)
  );
};

export default minimax;
