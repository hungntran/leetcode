/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;

  while (x !== 0) {
    const pop = x % 10;

    x = parseInt(x / 10);

    if (
      res > parseInt(MAX_INTEGER / 10) ||
      (res === parseInt(MAX_INTEGER / 10) && pop > 7)
    ) {
      return 0;
    }

    if (
      res < parseInt(MIN_INTEGER / 10) ||
      (res === parseInt(MIN_INTEGER / 10) && pop < -8)
    ) {
      return 0;
    }

    res = res * 10 + pop;
  }

  return res;
};

const MAX_INTEGER = 2147483648 - 1;
const MIN_INTEGER = -2147483648;
