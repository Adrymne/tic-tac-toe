export const PICK_SQUARE = 'PICK_SQUARE';
export const pickSquare = (row, column) => ({
  type: PICK_SQUARE,
  payload: { index: row * 3 + column }
});
