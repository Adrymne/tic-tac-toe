import * as SUT from './index';
import { CROSS, NOUGHT } from 'types';

it('getBoard', () => {
  const subject = SUT.getBoard;
  const state = {
    game: {
      cells: [undefined, 1, 0, 0, undefined, 1, 1, undefined, 0],
      activePlayer: 0
    },
    p1IsNought: true
  };

  const result = subject(state);

  expect(result).toEqual([
    [undefined, CROSS, NOUGHT],
    [NOUGHT, undefined, CROSS],
    [CROSS, undefined, NOUGHT]
  ]);
});
