/**
 * @param {number} n - a positive integer
 * @return {number}
 */
export const hammingWeight = function (n) {
  return n.toString(2).split('0').join('').length;
};
