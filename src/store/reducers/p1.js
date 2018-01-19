import { always } from 'ramda';
import { createReducer } from 'utils';
import { UPDATE_SETTINGS } from 'store/actions';
import { CROSS, NOUGHT } from 'types';

export default createReducer(CROSS, {
  [UPDATE_SETTINGS]: action => always(action.payload.side)
});

export const getP1Mark = state => state;
export const getP2Mark = state => (state === CROSS ? NOUGHT : CROSS);
