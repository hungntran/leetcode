/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
  const n = grid.length;
  const m = grid[0].length;

  let result = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      result += calcArea(grid, i, j);
    }
  }

  return result;
};

const calcArea = (grid, i, j) => {
  if (grid[i][j] === 0) {
    return 0;
  }

  let area = 2;

  area += Math.max(0, grid[i][j] - (grid[i - 1]?.[j] || 0));
  area += Math.max(0, grid[i][j] - (grid[i + 1]?.[j] || 0));
  area += Math.max(0, grid[i][j] - (grid[i][j - 1] || 0));
  area += Math.max(0, grid[i][j] - (grid[i][j + 1] || 0));

  return area;
};
