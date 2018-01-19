import { prop, evolve, __, update, always } from 'ramda';
import { createReducer } from 'utils';
import { PICK_SQUARE, END_GAME } from 'store/actions';
import { CROSS, NOUGHT, EMPTY } from 'types';

const DEFAULT_STATE = {
  cells: new Array(9).fill(EMPTY),
  activePlayer: CROSS
};

// recordMove :: (Action, State) -> Cells -> Cells
const recordMove = ({ index }, { activePlayer }) => update(index, activePlayer);
// switchPlayer :: ActivePlayer -> ActivePlayer
const switchPlayer = player => (player === CROSS ? NOUGHT : CROSS);

export default createReducer(DEFAULT_STATE, {
  [PICK_SQUARE]: (action, state) =>
    evolve(__, state)({
      cells: recordMove(action.payload, state),
      activePlayer: switchPlayer
    }),
  [END_GAME]: () => always(DEFAULT_STATE)
});

export const cellsSelector = prop('cells');
export const getActivePlayer = prop('activePlayer');
