import { update } from 'ramda';
import * as sut from './opener';
import { EMPTY, CROSS } from 'types';

const EMPTY_BOARD = new Array(9).fill(EMPTY);
const openAt = index => update(index, CROSS, EMPTY_BOARD);

it('isCornerMove', () => {
  const subject = sut.isCornerMove;

  expect(subject(openAt(0))).toBe(true);
  expect(subject(openAt(1))).toBe(false);
  expect(subject(openAt(2))).toBe(true);
  expect(subject(openAt(3))).toBe(false);
  expect(subject(openAt(4))).toBe(false);
  expect(subject(openAt(5))).toBe(false);
  expect(subject(openAt(6))).toBe(true);
  expect(subject(openAt(7))).toBe(false);
  expect(subject(openAt(8))).toBe(true);
});

it('isCenterMove', () => {
  const subject = sut.isCenterMove;

  expect(subject(openAt(0))).toBe(false);
  expect(subject(openAt(1))).toBe(false);
  expect(subject(openAt(2))).toBe(false);
  expect(subject(openAt(3))).toBe(false);
  expect(subject(openAt(4))).toBe(true);
  expect(subject(openAt(5))).toBe(false);
  expect(subject(openAt(6))).toBe(false);
  expect(subject(openAt(7))).toBe(false);
  expect(subject(openAt(8))).toBe(false);
});

it('move first', () => {
  const subject = sut.turns[0];

  const result = subject('blah', 0);

  expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
});

describe('move second', () => {
  const subject = sut.turns[1];

  it('corner marked', () => {
    expect(subject(openAt(0))).toEqual([4]);
    expect(subject(openAt(2))).toEqual([4]);
    expect(subject(openAt(6))).toEqual([4]);
    expect(subject(openAt(8))).toEqual([4]);
  });

  it('center marked', () => {
    expect(subject(openAt(4))).toEqual([0, 2, 6, 8]);
  });

  it('edge marked', () => {
    // (0, 1)
    expect(subject(openAt(1))).toEqual([0, 2, 4, 7]);
    // (2, 1)
    expect(subject(openAt(7))).toEqual([6, 8, 4, 1]);
    // (1, 0)
    expect(subject(openAt(3))).toEqual([0, 6, 4, 5]);
    // (1, 2)
    expect(subject(openAt(5))).toEqual([2, 8, 4, 3]);
  });
});
