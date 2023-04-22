/**
 * @param {number} n
 * @return {boolean}
 */
export const isUgly = function (n) {
  if (n < 0) {
    return false;
  }

  for (const factor of [2, 3, 5]) {
    n = divideIfPosible(n, factor);
  }

  return n === 1;
};

const divideIfPosible = (dividend, divisor) => {
  while (dividend % divisor === 0) {
    dividend /= divisor;
  }
  return dividend;
};
