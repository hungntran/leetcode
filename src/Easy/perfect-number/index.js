/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  const primes = [2, 3, 5, 7, 13, 17, 19, 31];

  for (const p of primes) {
    const k = Math.pow(2, p - 1) * (Math.pow(2, p) - 1);

    if (num === k) {
      return true;
    }
  }

  return false;
};
