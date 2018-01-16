import R from 'ramda';
import subject from './game';
import * as actions from 'store/actions';

it('select square for active player', () => {
  const state = {
    cells: [undefined, undefined, undefined],
    activePlayer: 0
  };
  const action = actions.pickSquare(0, 1);

  const result = subject(state, action);

  expect(result.cells).toEqual([undefined, 0, undefined]);
});

it('update active player', () => {
  const action = actions.pickSquare(0, 0);

  expect(
    R.propEq('activePlayer', 1, subject({ activePlayer: 0 }, action))
  ).toBe(true);
  expect(
    R.propEq('activePlayer', 0, subject({ activePlayer: 1 }, action))
  ).toBe(true);
});
