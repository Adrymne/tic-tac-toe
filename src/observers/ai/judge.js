import * as R from 'ramda';
import { EMPTY } from 'types';

const ROW_INDICES = [
  // horizontal
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // vertical
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // diagonal
  [0, 4, 8],
  [6, 4, 2]
];

// getRowValues :: Cells -> [CellValue]
export const getRowValues = R.curry((cells, indices) =>
  R.map(i => cells[i], indices)
);

// isAllEqual :: [CellValue] -> Boolean
const isAllEqual = values => R.all(R.equals(R.head(values)), R.tail(values));
// isNotEmptyCells :: [CellValue] -> Boolean
const isNotEmptyCells = R.complement(R.any(R.equals(EMPTY)));

// isWinner :: [CellValue] -> Boolean
export const isWinner = R.allPass([isAllEqual, isNotEmptyCells]);

// findWinningRow :: Cells -> [CellValue] | Undefined
const findWinningRow = cells =>
  R.find(R.pipe(getRowValues(cells), isWinner), ROW_INDICES);

const getWinner = (cells, row) => cells[R.head(row)];

const isTie = isNotEmptyCells;

// judge :: Cells -> GameState
export default function judge(cells) {
  const row = findWinningRow(cells);
  return row
    ? { isEnded: true, winner: getWinner(cells, row) }
    : { isEnded: isTie(cells) };
}
