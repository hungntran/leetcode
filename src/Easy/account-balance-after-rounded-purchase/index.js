/**
 * @param {number} purchaseAmount
 * @return {number}
 */
var accountBalanceAfterPurchase = function (purchaseAmount) {
  if (purchaseAmount % 10 === 0) {
    return 100 - purchaseAmount;
  }

  if (purchaseAmount % 10 < 5) {
    return 100 - parseInt(purchaseAmount / 10) * 10;
  }

  return 100 - (parseInt(purchaseAmount / 10) + 1) * 10;
};