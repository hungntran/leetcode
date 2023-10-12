/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const visited = Array(m)
    .fill(0)
    .map(() => Array(n).fill(false));
  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) continue;

      if (grid[i][j] === 1) {
        max = Math.max(max, calcArea(i, j));
      } else {
        visited[i][j] = true;
      }
    }
  }

  return max;

  function calcArea(i, j) {
    if (i >= m || i < 0) {
      return 0;
    }

    if (j >= n || j < 0) {
      return 0;
    }

    if (visited[i][j]) {
      return 0;
    }

    if (grid[i][j] === 0) {
      visited[i][j] = true;
      return 0;
    }

    visited[i][j] = true;
    return (
      1 +
      calcArea(i + 1, j) +
      calcArea(i - 1, j) +
      calcArea(i, j - 1) +
      calcArea(i, j + 1)
    );
  }
};
