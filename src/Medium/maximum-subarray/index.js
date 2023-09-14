/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const newSum = Math.max(nums[i], nums[i - 1] + nums[i]);
    nums[i] = newSum;
    sum = Math.max(sum, newSum);
  }

  return sum;
};
