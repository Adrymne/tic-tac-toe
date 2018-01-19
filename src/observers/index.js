import * as R from 'ramda';
import createObserver from 'redux-watch';
import store from 'store';
import { getCells, isVsCom, getActivePlayer, getP1Mark } from 'store/reducers';
import { P1, P2 } from 'types';
import * as actions from 'store/actions';
import evaluateBoard from './ai/judge';
import runAi from './ai';

// isComputerTurn :: State -> Boolean
const isComputerTurn = state => isVsCom(state) && getActivePlayer(state) === P2;

// const getWinner :: (Mark, Mark) -> Player | Undefined
export const getWinningPlayer = (p1Mark, winner) =>
  winner ? (p1Mark === winner ? P1 : P2) : undefined;

// endGame :: (State, Mark) -> Action
const endGame = (state, winner) =>
  actions.endGame(getWinningPlayer(getP1Mark(state), winner));

// updateBoard :: State -> Action | Undefined
export const updateBoard = state =>
  R.pipe(
    getCells,
    evaluateBoard,
    R.ifElse(
      R.prop('isEnded'),
      ({ winner }) => endGame(state, winner),
      () => (isComputerTurn(state) ? runAi(state) : undefined)
    )
  )(state);

const runUpdate = R.pipe(
  store.getState,
  updateBoard,
  R.unless(R.isNil, store.dispatch)
);

const observeBoard = createObserver(R.pipe(store.getState, getCells));
store.subscribe(observeBoard(runUpdate));
