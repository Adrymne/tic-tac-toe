import { always, propOr, __ } from 'ramda';
import { createReducer } from 'utils';
import { SET_P1_MARK } from 'store/actions';
import { CROSS, NOUGHT, EMPTY, P1, P2 } from 'types';

export default createReducer(NOUGHT, {
  [SET_P1_MARK]: action => always(action.payload.mark)
});

export const toMarkSelector = state =>
  state === NOUGHT
    ? propOr(EMPTY, __, { [P1]: NOUGHT, [P2]: CROSS })
    : propOr(EMPTY, __, { [P1]: CROSS, [P2]: NOUGHT });
