import * as SUT from './utils';

describe('createReducer', () => {
  const subject = SUT.createReducer;

  it('return state for unhandled action', () => {
    const state = {};
    const action = {};

    const result = subject('blah', {})(state, action);

    expect(result).toBe(state);
  });

  it('reducer may take only action as param', () => {
    const state = 1;
    const action = { type: 'ADD', value: 3 };
    const handlers = { ADD: ({ value }) => s => s + value };

    const result = subject('blah', handlers)(state, action);

    expect(result).toBe(4);
  });

  it('reducer may take action and state as params', () => {
    const state = 3;
    const action = { type: 'MULT', value: 2 };
    const handlers = { MULT: ({ value }, state) => value * state };

    const result = subject('blah', handlers)(state, action);

    expect(result).toBe(6);
  });

  it('define default state', () => {
    const action = { type: 'ADD', value: 2 };
    const handlers = { ADD: ({ value }, state) => value + state };

    const result = subject(4, handlers)(undefined, action);

    expect(result).toBe(6);
  });
});
