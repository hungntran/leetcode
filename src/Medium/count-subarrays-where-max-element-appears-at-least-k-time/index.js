/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
  const max = Math.max(...nums)
  let maxIndex = []
  let res = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      maxIndex.push(i)
    }

    if (maxIndex.length >= k) {
      res += maxIndex[maxIndex.length - k] + 1
    }
  }

  return res
}
