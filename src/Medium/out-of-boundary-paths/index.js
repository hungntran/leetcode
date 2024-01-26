/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const M = 1_000_000_007
  const memo = Array(m)
    .fill(0)
    .map((_) =>
      Array(n)
        .fill(0)
        .map((_) => Array(maxMove + 1).fill(-1))
    )

  return handler(startRow, startColumn, maxMove)

  function handler(i, j, maxMove) {
    if (i < 0 || j < 0 || i >= m || j >= n) {
      return 1
    }

    if (maxMove === 0) {
      return 0
    }

    if (memo[i][j][maxMove] >= 0) {
      return memo[i][j][maxMove]
    }

    memo[i][j][maxMove] =
      (((handler(i - 1, j, maxMove - 1) + handler(i + 1, j, maxMove - 1)) % M) +
        ((handler(i, j - 1, maxMove - 1) + handler(i, j + 1, maxMove - 1)) %
          M)) %
      M

    return memo[i][j][maxMove]
  }
}
