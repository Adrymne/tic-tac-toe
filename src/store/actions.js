export const PICK_SQUARE = 'PICK_SQUARE';
export const pickSquare = (row, column) => ({
  type: PICK_SQUARE,
  payload: { index: row * 3 + column }
});

export const END_GAME = 'END_GAME';
export const endGame = winner => ({ type: END_GAME, payload: { winner } });

export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const updateSettings = settings => ({
  type: UPDATE_SETTINGS,
  payload: settings
});
