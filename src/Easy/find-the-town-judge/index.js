/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
  const map = Array(n + 1).fill(0)
  const dp = Array(n + 1)
  let max = 1

  for (const [a, b] of trust) {
    map[b] += 1
    dp[a] = b
    if (map[b] > map[max]) {
      max = b
    }
  }

  if (map[max] !== n - 1) {
    return -1
  }

  if (dp[max] != null) {
    return -1
  }

  return max
}
