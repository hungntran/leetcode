/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function (matrix) {
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      handler(i, j);
    }
  }

  return Math.min(...matrix[n - 1]);

  function handler(i, j) {
    if (i - 1 < 0) return;

    const l = matrix[i - 1][j - 1] ?? Infinity;
    const r = matrix[i - 1][j + 1] ?? Infinity;
    const m = matrix[i - 1][j] ?? Infinity;

    matrix[i][j] += Math.min(l, r, m);
  }
};
