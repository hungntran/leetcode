/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
  const n = grid.length;
  let area = 0;

  for (let i = 0; i < n; i++) {
    let largestRow = 0;
    let largestCol = 0;

    for (let j = 0; j < n; j++) {
      if (grid[i][j] > 0) {
        area += 1;
      }

      largestRow = Math.max(largestRow, grid[i][j]);
      largestCol = Math.max(largestCol, grid[j][i]);
    }

    area += largestCol + largestRow;
  }

  return area;
};
