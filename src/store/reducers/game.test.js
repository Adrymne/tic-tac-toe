import R from 'ramda';
import subject from './game';
import * as actions from 'store/actions';
import { CROSS, NOUGHT, EMPTY } from 'types';

it('select square for active player', () => {
  const state = {
    // prettier-ignore
    cells: [
      NOUGHT, EMPTY, CROSS,
      CROSS, EMPTY, EMPTY,
      CROSS, NOUGHT, NOUGHT
    ],
    activePlayer: CROSS
  };
  const action = actions.pickSquare(1, 1);

  const result = subject(state, action);

  // prettier-ignore
  expect(result.cells).toEqual([
    NOUGHT, EMPTY, CROSS,
    CROSS, CROSS, EMPTY,
    CROSS, NOUGHT, NOUGHT
  ]);
});

it('update active player', () => {
  const state = {
    // prettier-ignore
    cells: [
      NOUGHT, EMPTY, CROSS,
      CROSS, EMPTY, EMPTY,
      CROSS, NOUGHT, NOUGHT
    ]
  };
  const action = actions.pickSquare(1, 1);
  const crossTurn = R.assoc('activePlayer', CROSS, state);
  const noughtTurn = R.assoc('activePlayer', NOUGHT, state);

  expect(R.prop('activePlayer', subject(crossTurn, action))).toBe(NOUGHT);
  expect(R.prop('activePlayer', subject(noughtTurn, action))).toBe(CROSS);
});

it('reset game if settings updated', () => {
  const state = {
    // prettier-ignore
    cells: [
      NOUGHT, EMPTY, CROSS,
      CROSS, EMPTY, EMPTY,
      CROSS, NOUGHT, EMPTY
    ],
    activePlayer: NOUGHT
  };
  const action = actions.updateSettings();

  const result = subject(state, action);

  expect(result).toEqual({
    // prettier-ignore
    cells: [
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY,
      EMPTY, EMPTY, EMPTY
    ],
    activePlayer: CROSS
  });
});
