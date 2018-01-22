import * as sut from './p2';
import * as actions from 'store/actions';
import { HARD_COM } from 'types';

it('UPDATE_SETTINGS', () => {
  const subject = sut.default;
  const state = 'blah';
  const action = actions.updateSettings({ opponent: HARD_COM });

  const result = subject(state, action);

  expect(result).toEqual(HARD_COM);
});
