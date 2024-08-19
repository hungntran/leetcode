/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function (s) {
  const dp = []
  let countB = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'b') {
      dp[i] = dp[i - 1] || 0
      countB += 1
    } else {
      dp[i] = Math.min(dp[i - 1] + 1, countB)
    }
  }

  return dp[s.length - 1] || 0
}
