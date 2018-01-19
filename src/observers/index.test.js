import * as R from 'ramda';
import * as sut from './index';
import { NOUGHT, CROSS, EMPTY, PLAYER, HARD_COM, P1, P2 } from 'types';
import * as actions from 'store/actions';

describe('getWinningPlayer', () => {
  const subject = sut.getWinningPlayer;

  it('p1 wins', () => {
    const p1 = CROSS;
    const winner = CROSS;

    const result = subject(p1, winner);

    expect(result).toEqual(P1);
  });

  it('p2 wins', () => {
    const p1 = CROSS;
    const winner = NOUGHT;

    const result = subject(p1, winner);

    expect(result).toEqual(P2);
  });

  it('tie', () => {
    const p1 = CROSS;
    const winner = undefined;

    const result = subject(p1, winner);

    expect(result).toEqual(undefined);
  });
});

describe('updateBoard', () => {
  const subject = sut.updateBoard;

  it('game over', () => {
    const state = {
      game: {
        // prettier-ignore
        cells: [
          NOUGHT, EMPTY, CROSS,
          CROSS, NOUGHT, EMPTY,
          CROSS, NOUGHT, NOUGHT
        ],
        activePlayer: CROSS
      },
      p1: NOUGHT,
      p2: { type: PLAYER }
    };

    const result = subject(state);

    expect(result).toEqual(actions.endGame(P1));
  });

  it('player vs player', () => {
    const state = {
      game: {
        // prettier-ignore
        cells: [
          NOUGHT, EMPTY, CROSS,
          CROSS, EMPTY, EMPTY,
          CROSS, NOUGHT, NOUGHT
        ],
        activePlayer: NOUGHT
      },
      p2: { type: PLAYER }
    };

    const result = subject(state);

    expect(result).toBe(undefined);
  });

  it('player vs computer', () => {
    const state = {
      game: {
        // prettier-ignore
        cells: [
          NOUGHT, EMPTY, CROSS,
          CROSS, EMPTY, EMPTY,
          CROSS, NOUGHT, NOUGHT
        ],
        activePlayer: NOUGHT
      },
      p1: CROSS,
      p2: { type: HARD_COM }
    };

    const result = subject(state);

    expect(result).toEqual(actions.pickSquare(1, 1));
  });
});
