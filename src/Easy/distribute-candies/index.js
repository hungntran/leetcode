/**
 * @param {number[]} candyType
 * @return {number}
 */
export const distributeCandies = function (candyType) {
  const n = candyType.length;
  const amountType = new Set(candyType).size;
  return Math.min(n / 2, amountType);
};
