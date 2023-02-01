/**
 * @param {number[]} cost
 * @return {number}
 */
export const minCostClimbingStairs = function (cost) {
  for (let i = 1; i < cost.length; i++) {
    cost[i] = cost[i] + Math.min(cost[i - 1], cost[i - 2] || 0);
  }

  return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};
