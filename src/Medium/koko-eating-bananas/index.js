/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
  let left = 1;
  let right = Math.max(...piles);
  let res = right;

  while (left <= right) {
    const mid = parseInt(left + (right - left) / 2);
    const amount = calc(piles, mid);

    if (amount > h) {
      left = mid + 1;
    } else {
      res = Math.min(res, mid);
      right = mid - 1;
    }
  }

  return res;
};

function calc(piles, k) {
  let sum = 0;
  for (const bananas of piles) {
    sum += Math.ceil(bananas / k);
  }
  return sum;
}
