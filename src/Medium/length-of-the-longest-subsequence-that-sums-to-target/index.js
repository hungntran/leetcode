/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var lengthOfLongestSubsequence = function (nums, target) {
  const cache = {};

  const output = helper(0, target);

  return output > 0 ? output : -1;

  function helper(i, target) {
    if (target < 0 || i > nums.length) {
      return -Infinity;
    }

    if (target === 0) {
      return 0;
    }

    const key = `${i}_${target}`;

    if (cache[key] && cache[key] !== -1) {
      return cache[key];
    }

    const take = 1 + helper(i + 1, target - nums[i]);
    const notTake = helper(i + 1, target);

    cache[key] = Math.max(take, notTake);

    return cache[key];
  }
};
