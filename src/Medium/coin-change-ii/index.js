/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  coins.sort((a, b) => a - b);
  const cache = {};

  return helper(0, 0);

  function helper(i, a) {
    if (a === amount) {
      return 1;
    }

    if (a > amount) {
      return 0;
    }

    if (i === coins.length) {
      return 0;
    }

    const key = `${i}_${a}`;

    if (cache[key] !== undefined) {
      return cache[key];
    }

    cache[key] = helper(i, a + coins[i]) + helper(i + 1, a);

    return cache[key];
  }
};
