/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  let count = 0;
  let i = 1;

  while (1) {
    n = n - i;

    if (n < 0) {
      break;
    }

    count++;
    i++;
  }

  return count;
};
