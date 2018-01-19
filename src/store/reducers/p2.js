import { PLAYER, HARD_COM } from 'types';
import { createReducer } from 'utils';

const DEFAULT = {
  type: PLAYER
};

export default createReducer(DEFAULT, {});

export const isVsCom = state => state.type === HARD_COM;
