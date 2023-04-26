/**
 * @param {number} n
 * @return {number[]}
 */
export const countBits = function (n) {
  return Array(n + 1)
    .fill(0)
    .map((num, index) => {
      return index.toString(2).replaceAll('0', '').length || 0;
    });
};
