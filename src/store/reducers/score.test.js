import { P1, P2 } from 'types';
import * as actions from 'store/actions';
import subject from './score';

describe('score', () => {
  it('p1 wins', () => {
    const state = { [P1]: 1, tie: 3, [P2]: 2 };
    const action = actions.endGame(P1);

    const result = subject(state, action);

    expect(result).toEqual({ [P1]: 2, tie: 3, [P2]: 2 });
  });

  it('p2 wins', () => {
    const state = { [P1]: 1, tie: 3, [P2]: 2 };
    const action = actions.endGame(P2);

    const result = subject(state, action);

    expect(result).toEqual({ [P1]: 1, tie: 3, [P2]: 3 });
  });

  it('tie', () => {
    const state = { [P1]: 1, tie: 3, [P2]: 2 };
    const action = actions.endGame();

    const result = subject(state, action);

    expect(result).toEqual({ [P1]: 1, tie: 4, [P2]: 2 });
  });
});
