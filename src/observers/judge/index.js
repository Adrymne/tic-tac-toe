import * as R from 'ramda';
import store from 'store';
import judgeBoard from './judge';
import { cellsSelector } from 'store/reducers';
import { endGame } from 'store/actions';

const runJudge = R.pipe(cellsSelector, judgeBoard);

export default () => {
  const { isEnded, winner } = runJudge(store.getState());
  if (isEnded) {
    store.dispatch(endGame(winner));
  }
};
