/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function (prices, money) {
  const sorted = prices.sort((a, b) => a - b);
  const [a, b] = sorted;

  if (a + b > money) {
    return money;
  }

  return money - (a + b);
};
