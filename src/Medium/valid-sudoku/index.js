/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  const n = 9;

  for (let i = 0; i < n; i++) {
    const setRow = new Set();
    const setCol = new Set();

    for (let j = 0; j < n; j++) {
      if (setRow.has(board[i][j])) {
        return false;
      }

      if (setCol.has(board[j][i])) {
        return false;
      }

      board[i][j] !== '.' && setRow.add(board[i][j]);
      board[j][i] !== '.' && setCol.add(board[j][i]);
    }
  }

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!helper(board, i, j)) {
        return false;
      }
    }
  }

  return true;
};

const helper = (box, x, y) => {
  const set = new Set();

  for (let i = 3 * x; i < 3 * x + 3; i++) {
    for (let j = 3 * y; j < 3 * y + 3; j++) {
      if (set.has(box[i][j])) {
        return false;
      }

      box[i][j] !== '.' && set.add(box[i][j]);
    }
  }

  return true;
};
