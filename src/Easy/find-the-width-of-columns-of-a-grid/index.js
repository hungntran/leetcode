/**
 * @param {number[][]} grid
 * @return {number[]}
 */
export const findColumnWidth = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const res = [];

  for (let i = 0; i < n; i++) {
    let maxLength = 0;
    for (let j = 0; j < m; j++) {
      maxLength = Math.max(grid[j][i].toString().length, maxLength);
    }

    res.push(maxLength);
  }

  return res;
};
