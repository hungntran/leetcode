/**
 * @param {number[]} stones
 * @return {number}
 */
export const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const [stone1, stone2] = stones.splice(-2);
    const left = stone2 - stone1;
    if (left !== 0) stones.push(left);
  }

  return stones[0] || 0;
};
