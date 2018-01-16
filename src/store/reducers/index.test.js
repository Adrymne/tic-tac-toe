import * as SUT from './index';
import { CROSS, NOUGHT, EMPTY, P1, P2 } from 'types';

it('getBoard', () => {
  const subject = SUT.getBoard;
  const state = {
    game: {
      cells: [EMPTY, P2, P1, P1, EMPTY, P2, P2, EMPTY, P1],
      activePlayer: 0
    },
    p1Mark: NOUGHT
  };

  const result = subject(state);

  expect(result).toEqual([
    [undefined, CROSS, NOUGHT],
    [NOUGHT, undefined, CROSS],
    [CROSS, undefined, NOUGHT]
  ]);
});
