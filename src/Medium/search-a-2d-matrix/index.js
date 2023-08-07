/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  return matrix.flatMap((row) => row).indexOf(target) !== -1;
};
