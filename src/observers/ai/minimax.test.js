import * as sut from './minimax';
import { NOUGHT, CROSS, EMPTY } from 'types';

describe('score', () => {
  const subject = sut.score;

  it('player wins', () => {
    expect(subject(NOUGHT, NOUGHT)).toBe(10);
    expect(subject(CROSS, CROSS)).toBe(10);
  });

  it('opponent wins', () => {
    expect(subject(NOUGHT, CROSS)).toBe(-10);
    expect(subject(CROSS, NOUGHT)).toBe(-10);
  });

  it('tie', () => {
    expect(subject(NOUGHT, undefined)).toBe(0);
    expect(subject(CROSS, undefined)).toBe(0);
  });
});

describe('getAvailableMoves', () => {
  const subject = sut.getAvailableMoves;

  it('return indices of empty cells on the board', () => {
    // prettier-ignore
    const cells = [
      NOUGHT, EMPTY, CROSS,
      CROSS, NOUGHT, EMPTY,
      EMPTY, NOUGHT, EMPTY
    ];

    const result = subject(cells);

    expect(result).toEqual([1, 5, 6, 8]);
  });
});

describe('pickMoveFor', () => {
  const subject = sut.pickMoveFor;

  it('returns higher score move for player turn', () => {
    const isPlayerTurn = true;
    const m1 = { score: 0, move: 4 };
    const m2 = { score: 10, move: 3 };

    const result = subject(isPlayerTurn, m1, m2);

    expect(result).toBe(m2);
  });

  it('returns lower score for opponent turn', () => {
    const isPlayerTurn = false;
    const m1 = { score: 0, move: 4 };
    const m2 = { score: 10, move: 3 };

    const result = subject(isPlayerTurn, m1, m2);

    expect(result).toBe(m1);
  });
});

describe('minimax', () => {
  const subject = sut.default;

  it('find best move', () => {
    const player = CROSS;
    const active = CROSS;
    // prettier-ignore
    const cells = [
      NOUGHT, EMPTY, CROSS,
      CROSS, EMPTY, EMPTY,
      CROSS, NOUGHT, NOUGHT
    ];

    const result = subject(player, active, cells);

    expect(result).toEqual({
      score: 10,
      move: 4
    });
  });

  it('completed game', () => {
    const player = CROSS;
    const active = CROSS;
    // prettier-ignore
    const cells = [
      NOUGHT, EMPTY, CROSS,
      CROSS, NOUGHT, EMPTY,
      CROSS, NOUGHT, NOUGHT
    ];

    const result = subject(player, active, cells);

    expect(result).toEqual({
      score: -10,
      move: undefined
    });
  });
});
