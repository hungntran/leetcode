/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var countPrimeSetBits = function (left, right) {
  const primeNumbers = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23]);

  let res = 0;

  while (left <= right) {
    const setBits = left.toString(2).replaceAll('0', '').length;

    if (primeNumbers.has(setBits)) {
      res += 1;
    }

    left += 1;
  }

  return res;
};
