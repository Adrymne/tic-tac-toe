import * as R from 'ramda';
import { EMPTY } from 'types';
import minimax from './minimax';
import opener from './opener';
import { getP2Mark, getCells } from 'store/reducers';
import * as actions from 'store/actions';

// getTurnCount :: Cells -> Number
export const getTurnCount = R.pipe(R.reject(R.equals(EMPTY)), R.length);

// findNextMove :: Mark -> Cells -> Result
const findNextMove = R.curry((computerMark, cells) =>
  R.pipe(
    getTurnCount,
    R.ifElse(opener.isDefined, opener.execute(cells), () =>
      minimax(computerMark, computerMark, cells)
    )
  )(cells)
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
