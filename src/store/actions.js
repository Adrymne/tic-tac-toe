export const PICK_SQUARE = 'PICK_SQUARE';
export const pickSquare = (row, column) => ({
  type: PICK_SQUARE,
  payload: { index: row * 3 + column }
});

export const END_GAME = 'END_GAME';
export const endGame = winner => ({ type: END_GAME, winner });

export const SET_P1_MARK = 'SET_P1_MARK';
export const setP1Mark = mark => ({ type: SET_P1_MARK, payload: { mark } });
