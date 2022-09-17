/**
 * @param {number[]} nums
 * @return {number}
 */
export const pivotIndex = function (nums) {
  const prefixSum = [];
  let currentSum = 0;

  for (const num of nums) {
    currentSum += num;
    prefixSum.push(currentSum);
  }

  for (let i = 0; i < prefixSum.length; i++) {
    const leftSum = prefixSum[i] - nums[i];
    const rightSum = prefixSum.at(-1) - prefixSum[i];
    if (leftSum === rightSum) {
      return i;
    }
  }

  return -1;
};
