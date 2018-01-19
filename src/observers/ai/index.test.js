import * as sut from './index';
import * as actions from 'store/actions';

it('executeMove', () => {
  const subject = sut.executeMove;

  expect(subject({ move: 0 })).toEqual(actions.pickSquare(0, 0));
  expect(subject({ move: 1 })).toEqual(actions.pickSquare(0, 1));
  expect(subject({ move: 2 })).toEqual(actions.pickSquare(0, 2));
  expect(subject({ move: 3 })).toEqual(actions.pickSquare(1, 0));
  expect(subject({ move: 4 })).toEqual(actions.pickSquare(1, 1));
  expect(subject({ move: 5 })).toEqual(actions.pickSquare(1, 2));
  expect(subject({ move: 6 })).toEqual(actions.pickSquare(2, 0));
  expect(subject({ move: 7 })).toEqual(actions.pickSquare(2, 1));
  expect(subject({ move: 8 })).toEqual(actions.pickSquare(2, 2));
});
