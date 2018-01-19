import { always } from 'ramda';
import { PLAYER, HARD_COM } from 'types';
import { createReducer } from 'utils';
import { UPDATE_SETTINGS } from 'store/actions';

const DEFAULT = PLAYER;

export default createReducer(DEFAULT, {
  [UPDATE_SETTINGS]: ({ payload }) => always(payload.opponent)
});

export const getP2Type = state => state;
export const isVsCom = state => state === HARD_COM;
