/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];

  return Math.max(
    optimalRob(nums.slice(0, nums.length - 1)),
    optimalRob(nums.slice(1))
  );
};

function optimalRob(nums) {
  for (let i = 0; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 3] || 0, nums[i - 2] || 0) + nums[i];
  }

  return Math.max(nums.at(-1) || 0, nums.at(-2) || 0);
}
