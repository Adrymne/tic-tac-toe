import judge, * as sut from './judge';
import { P1, P2, EMPTY } from 'types';

it('getRowValues', () => {
  const subject = sut.getRowValues;
  const cells = [P1, P2, P1, EMPTY, P2, EMPTY, P1, EMPTY, EMPTY];
  const indices = [2, 4, 6];

  const result = subject(cells, indices);

  expect(result).toEqual([P1, P2, P1]);
});

describe('isWinner', () => {
  const subject = sut.isWinner;

  it('all elements match', () => {
    expect(subject([P1, P1, P1])).toBe(true);
    expect(subject([P2, P2, P2])).toBe(true);
  });

  it('mismatch', () => {
    expect(subject([P1, EMPTY, P1])).toBe(false);
    expect(subject([P2, P1, P1])).toBe(false);
    expect(subject([P2, P2, P1])).toBe(false);
  });

  it('empty cells do not count for match', () => {
    expect(subject([EMPTY, EMPTY, EMPTY])).toBe(false);
  });
});

describe('judge', () => {
  const subject = judge;

  it('horizontal row 1', () => {
    const cells = [P1, P1, P1, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true, winner: P1 });
  });

  it('horizontal row 2', () => {
    const cells = [EMPTY, EMPTY, EMPTY, P2, P2, P2, EMPTY, EMPTY, EMPTY];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true, winner: P2 });
  });

  it('horizontal row 3', () => {
    const cells = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, P1, P1, P1];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true, winner: P1 });
  });

  it('vertical row 1', () => {
    const cells = [P1, EMPTY, EMPTY, P1, EMPTY, EMPTY, P1, EMPTY, EMPTY];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true, winner: P1 });
  });

  it('vertical row 2', () => {
    const cells = [EMPTY, P2, EMPTY, EMPTY, P2, EMPTY, EMPTY, P2, EMPTY];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true, winner: P2 });
  });

  it('vertical row 3', () => {
    const cells = [EMPTY, EMPTY, P1, EMPTY, EMPTY, P1, EMPTY, EMPTY, P1];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true, winner: P1 });
  });

  it('diagonal - top left to bottom right', () => {
    const cells = [P1, EMPTY, EMPTY, EMPTY, P1, EMPTY, EMPTY, EMPTY, P1];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true, winner: P1 });
  });

  it('diagonal - bottom left to top right', () => {
    const cells = [EMPTY, EMPTY, P2, EMPTY, P2, EMPTY, P2, EMPTY, EMPTY];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true, winner: P2 });
  });

  it('tie', () => {
    const cells = [P1, P2, P1, P2, P2, P1, P1, P1, P2];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: true });
  });

  it('not ended', () => {
    const cells = [P1, EMPTY, P2, EMPTY, EMPTY, P1, EMPTY, EMPTY, EMPTY];

    const result = subject(cells);

    expect(result).toEqual({ isEnded: false });
  });
});
