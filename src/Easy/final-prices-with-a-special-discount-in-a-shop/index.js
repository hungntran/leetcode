/**
 * @param {number[]} prices
 * @return {number[]}
 */
export const finalPrices = function (prices) {
  const res = [...prices];

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        res[i] = prices[i] - prices[j];
        break;
      }
    }
  }

  return res;
};
