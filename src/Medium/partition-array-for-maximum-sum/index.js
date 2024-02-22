/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var maxSumAfterPartitioning = function (arr, k) {
  const n = arr.length
  const cache = {}

  return dfs(0)

  function dfs(i) {
    if (i >= n) {
      return 0
    }

    if (cache[i]) {
      return cache[i]
    }

    let ans = 0
    let curMax = 0

    for (let j = i; j < Math.min(n, i + k); j++) {
      curMax = Math.max(curMax, arr[j])
      ans = Math.max(ans, dfs(j + 1) + curMax * (j - i + 1))
    }

    cache[i] = ans
    return ans
  }
}
