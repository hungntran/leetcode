/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  const n = matrix[0].length;

  let left = 0;
  let right = m * n - 1;

  while (left <= right) {
    const mid = parseInt(left + (right - left) / 2);
    const j = mid % n;
    const i = parseInt(mid / n);

    if (matrix[i][j] === target) {
      return true;
    } else if (matrix[i][j] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return false;
};
