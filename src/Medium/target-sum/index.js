/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let count = 0;

  helper(0, 0);

  return count;

  function helper(i, total) {
    if (i >= nums.length) {
      if (total === target) {
        count++;
      }
      return;
    }

    helper(i + 1, total + nums[i]);
    helper(i + 1, total - nums[i]);
  }
};
