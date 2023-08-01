/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const result = Array(matrix[0].length)
    .fill(0)
    .map(() => Array(matrix.length));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      result[j][i] = matrix[i][j];
    }
  }

  return result;
};
