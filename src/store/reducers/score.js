import * as R from 'ramda';
import { P1, P2 } from 'types';
import { END_GAME } from 'store/actions';
import { createReducer } from 'utils';

const DEFAULT = {
  [P1]: 0,
  [P2]: 0,
  tie: 0
};

const lensWinner = ({ winner }) => R.lensProp(R.defaultTo('tie', winner));

export default createReducer(DEFAULT, {
  [END_GAME]: action => R.over(lensWinner(action.payload), R.inc)
});
