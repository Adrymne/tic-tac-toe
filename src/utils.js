import R from 'ramda';

// Allow reducers to be specified as transformations on state
export const createReducer = (initial, handlers) => (
  state = initial,
  action
) => {
  const f = R.propOr(R.always(R.identity), action.type, handlers);

  return R.curry(f)(action)(state);
};
