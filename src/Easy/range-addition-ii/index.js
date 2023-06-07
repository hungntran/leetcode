/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
  if (ops.length === 0) {
    return m * n;
  }

  let minX = m;
  let minY = n;

  for (const [x, y] of ops) {
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
  }

  return minX * minY;
};
