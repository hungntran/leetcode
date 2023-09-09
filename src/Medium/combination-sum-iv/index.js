/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const cache = new Map();
  return dp(target);

  function dp(target) {
    if (target === 0) return 1;
    if (target < 0) return 0;
    if (cache.has(target)) return cache.get(target);

    let count = 0;

    for (const n of nums) {
      if (n <= target) {
        const remain = target - n;
        count += dp(remain);
      }
    }

    cache.set(target, count);
    return count;
  }
};
