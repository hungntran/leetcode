/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;

  const maxLeft = Array(n);
  const maxRight = Array(n);

  for (let i = 0, j = n - 1; i < n, j >= 0; i++, j--) {
    maxLeft[i] = Math.max(height[i - 1] || 0, maxLeft[i - 1] || 0);
    maxRight[j] = Math.max(height[j + 1] || 0, maxRight[j + 1] || 0);
  }

  return height.reduce(
    (result, item, index) =>
      result + Math.max(Math.min(maxLeft[index], maxRight[index]) - item, 0),
    0
  );
};
