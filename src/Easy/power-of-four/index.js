/**
 * @param {number} n
 * @return {boolean}
 */
export const isPowerOfFour = function (n) {
  while (n > 1) {
    n /= 4;
  }

  return n === 1;
};
