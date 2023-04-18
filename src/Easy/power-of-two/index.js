/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfTwo = function(n) {
  return Number.isInteger(Math.log2(n))
};