import { prop, evolve, __, update, always, all, equals } from 'ramda';
import { createReducer } from 'utils';
import { PICK_SQUARE, END_GAME, UPDATE_SETTINGS } from 'store/actions';
import { CROSS, NOUGHT, EMPTY } from 'types';

const DEFAULT_STATE = {
  cells: new Array(9).fill(EMPTY),
  nextMark: CROSS
};

// recordMove :: (Action, State) -> Cells -> Cells
const recordMove = ({ index }, { nextMark }) => update(index, nextMark);
// switchPlayer :: Mark -> Mark
const switchActiveMark = mark => (mark === CROSS ? NOUGHT : CROSS);

export default createReducer(DEFAULT_STATE, {
  [PICK_SQUARE]: (action, state) =>
    evolve(__, state)({
      cells: recordMove(action.payload, state),
      nextMark: switchActiveMark
    }),
  [END_GAME]: () => always(DEFAULT_STATE),
  [UPDATE_SETTINGS]: () => always(DEFAULT_STATE)
});

export const cellsSelector = prop('cells');
export const getNextMark = prop('nextMark');
export const isGameInProgress = state => !all(equals(EMPTY), state.cells);
