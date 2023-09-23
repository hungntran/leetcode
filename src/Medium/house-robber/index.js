/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  for (let i = 2; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 2] || 0, nums[i - 3] || 0) + nums[i];
  }

  return Math.max(nums.at(-1), nums.at(-2) || 0);
};
