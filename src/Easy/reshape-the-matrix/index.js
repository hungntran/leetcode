/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const m = mat.length;
  const n = mat[0].length;

  if (m * n !== r * c) {
    return mat;
  }

  const res = Array(r)
    .fill(0)
    .map(() => Array(c));

  let k = 0,
    q = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (q >= c) {
        q = 0;
        k += 1;
      }

      res[k][q] = mat[i][j];
      q++;
    }
  }

  return res;
};
