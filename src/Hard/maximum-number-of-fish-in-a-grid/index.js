/**
 * @param {number[][]} grid
 * @return {number}
 */
var findMaxFish = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array(m).fill(Array(n));
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      dp[i][j] = catchFish(grid, i, j);
      if (dp[i][j] > max) {
        max = dp[i][j];
      }
    }
  }

  return max;
};

const catchFish = (grid, x, y) => {
  if (x < 0 || y < 0 || x >= grid.length || y >= grid[0].length) {
    return 0;
  }

  if (grid[x][y] === 0) {
    return 0;
  }

  const sum = grid[x][y];
  grid[x][y] = 0;

  return (
    sum +
    catchFish(grid, x - 1, y) +
    catchFish(grid, x + 1, y) +
    catchFish(grid, x, y - 1) +
    catchFish(grid, x, y + 1)
  );
};
