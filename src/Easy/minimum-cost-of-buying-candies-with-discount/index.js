/**
 * @param {number[]} cost
 * @return {number}
 */
export const minimumCost = function (cost) {
  cost.sort((a, b) => b - a);
  let cart = 0;
  let freeCheck = 0;
  for (let i = 0; i < cost.length; i++) {
    freeCheck += 1;

    if (freeCheck === 3) {
      freeCheck = 0;
      continue;
    }

    cart += cost[i];
  }

  return cart;
};
