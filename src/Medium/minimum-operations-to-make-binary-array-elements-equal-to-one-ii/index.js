/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const dp = []

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      dp[i] = nums[i] ? 0 : 1
      continue
    }

    if (nums[i] === 1) {
      dp[i] = dp[i + 1]
    } else {
      if (nums[i + 1] === 0) dp[i] = dp[i + 1]
      else dp[i] = dp[i + 1] + 2
    }
  }

  return dp[0]
}