/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  coins.sort((a, b) => a - b);

  const cache = new Map();

  const helper = (coins, amount) => {
    if (amount < 0) {
      return 0;
    }

    if (amount === 0) {
      return 1;
    }

    const key = coins.join(',') + '_' + amount;

    if (cache.has(key)) {
      return cache.get(key);
    }

    let count = 0;

    for (let i = 0; i < coins.length; i++) {
      count += helper(coins.slice(0, i + 1), amount - coins[i]);
    }

    cache.set(key, count);
    return count;
  };

  helper(coins, amount, cache);
  console.log(cache);
};

change(5, [1, 2, 5]);
