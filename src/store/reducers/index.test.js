import * as SUT from './index';
import { CROSS, NOUGHT, EMPTY } from 'types';

it('getBoard', () => {
  const subject = SUT.getBoard;
  const state = {
    game: {
      // prettier-ignore
      cells: [
        EMPTY, CROSS, NOUGHT,
        NOUGHT, EMPTY, CROSS,
        CROSS, EMPTY, NOUGHT
      ]
    }
  };

  const result = subject(state);

  expect(result).toEqual([
    [EMPTY, CROSS, NOUGHT],
    [NOUGHT, EMPTY, CROSS],
    [CROSS, EMPTY, NOUGHT]
  ]);
});
