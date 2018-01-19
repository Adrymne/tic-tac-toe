import { always } from 'ramda';
import { createReducer } from 'utils';
import { SET_P1_MARK } from 'store/actions';
import { CROSS, NOUGHT } from 'types';

export default createReducer(CROSS, {
  [SET_P1_MARK]: action => always(action.payload.mark)
});

export const getP1Mark = state => state;
export const getP2Mark = state => (state === CROSS ? NOUGHT : CROSS);
