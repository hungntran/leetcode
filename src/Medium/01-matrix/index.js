/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const m = mat.length;
  const n = mat[0].length;

  const dp = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false));

  const queue = mat.reduce((acc, row, i) => {
    row.forEach((num, j) => {
      if (num === 0) {
        acc.push([i, j]);
      } else {
        mat[i][j] = Infinity;
      }
    });

    return acc;
  }, []);

  while (queue.length > 0) {
    const [i, j] = queue.shift();
    dp[i][j] = true;

    if (mat[i - 1]?.[j] && dp[i - 1]?.[j] === false) {
      mat[i - 1][j] = Math.min(mat[i - 1][j], mat[i][j] + 1);
      queue.push([i - 1, j]);
    }
    if (mat[i + 1]?.[j] && dp[i + 1]?.[j] === false) {
      mat[i + 1][j] = Math.min(mat[i + 1][j], mat[i][j] + 1);
      queue.push([i + 1, j]);
    }
    if (mat[i][j + 1] && dp[i][j + 1] === false) {
      mat[i][j + 1] = Math.min(mat[i][j + 1], mat[i][j] + 1);
      queue.push([i, j + 1]);
    }
    if (mat[i][j - 1] && dp[i][j - 1] === false) {
      mat[i][j - 1] = Math.min(mat[i][j - 1], mat[i][j] + 1);
      queue.push([i, j - 1]);
    }
  }

  return mat;
};
