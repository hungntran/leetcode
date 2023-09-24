/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  const dp = nums.map((i) => Infinity);
  dp[0] = 0;

  for (let i = 0; i < nums.length; i++) {
    let k = 1;

    while (k <= nums[i] && i + k < nums.length) {
      dp[i + k] = Math.min(dp[i + k] || Infinity, dp[i] + 1);
      k++;
    }
  }

  return dp.at(-1);
};
