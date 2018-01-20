import * as R from 'ramda';
import minimax from './minimax';
import { getP2Mark, getCells } from 'store/reducers';
import * as actions from 'store/actions';

// evaluateBoard :: Mark -> Cells -> Result
const findNextMove = R.curry((computerMark, cells) =>
  minimax(computerMark, computerMark, cells)
);

// executeMove :: Result -> Action
// NB: minimax can return undefined move if passed a completed board
//     this should never happen as caller checks whether game is over before calling ai
export const executeMove = ({ move }) =>
  actions.pickSquare(Math.floor(move / 3), move % 3);

// getNextMove :: State -> Action
const getNextMove = state =>
  R.pipe(getCells, findNextMove(getP2Mark(state)), executeMove)(state);

export default getNextMove;
