/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  let perimeter = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        continue;
      }

      perimeter += 4;

      if (j > 0 && grid[i][j - 1]) {
        perimeter -= 2;
      }

      if (i > 0 && grid[i - 1][j]) {
        perimeter -= 2;
      }
    }
  }

  return perimeter;
};
