/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
  nums.sort((a, b) => a - b)
  const cache = {}

  let res = []

  for (let i = 0; i < nums.length; i++) {
    const tmp = dfs(i)
    if (tmp.length > res.length) {
      res = tmp
    }
  }

  return res

  function dfs(i) {
    if (i === nums.length) {
      return []
    }

    if (cache[i]) {
      return cache[i]
    }

    let res = [nums[i]]

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] % nums[i] === 0) {
        const tmp = [nums[i]].concat(dfs(j))
        if (tmp.length > res.length) {
          res = tmp
        }
      }
    }

    cache[i] = res
    return res
  }
}
