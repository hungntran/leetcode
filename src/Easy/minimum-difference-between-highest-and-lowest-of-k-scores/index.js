/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const minimumDifference = function (nums, k) {
  if (k === 1) return 0;

  nums.sort((a, b) => a - b);
  let res = Infinity;
  for (let i = 0; i <= nums.length - k; i++) {
    res = Math.min(res, nums[i + k - 1] - nums[i]);
  }

  return res;
};
