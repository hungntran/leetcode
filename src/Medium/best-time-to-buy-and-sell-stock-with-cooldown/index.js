/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const cache = {};
  const n = prices.length;

  return calculateProfit('BUY', 0);

  function calculateProfit(state, i) {
    if (i >= n) {
      return 0;
    }

    const key = `${i}_${state}`;

    if (cache[key]) {
      return cache[key];
    }

    if (state === 'BUY') {
      const profitHold = calculateProfit('BUY', i + 1);
      const profitBuy = calculateProfit('SELL', i + 1) - prices[i];
      cache[key] = Math.max(profitHold, profitBuy);
    }

    if (state === 'SELL') {
      const profitHold = calculateProfit('SELL', i + 1);
      const profitSell = calculateProfit('BUY', i + 2) + prices[i];
      cache[key] = Math.max(profitHold, profitSell);
    }

    return cache[key];
  }
};

// State
// Hold - Buy - Sell
