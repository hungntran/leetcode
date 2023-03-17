/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
export const shuffle = function (nums, n) {
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(nums[i], nums[n + i]);
  }

  return result;
};
