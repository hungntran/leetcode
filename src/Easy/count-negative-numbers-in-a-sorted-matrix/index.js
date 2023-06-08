/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let res = 0;

  for (let i = 0; i < grid.length; i++) {
    res += helper(grid[i]);
  }

  return res;
};

const helper = (row) => {
  for (let i = 0; i < row.length; i++) {
    if (row[i] < 0) {
      return row.length - i;
    }
  }

  return 0;
};
