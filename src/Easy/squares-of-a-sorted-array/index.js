/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const n = nums.length
  const res = []

  let left = 0
  let right = n - 1

  for (let i = n - 1; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      res[i] = nums[right] ** 2
      right -= 1
    } else {
      res[i] = nums[left] ** 2
      left += 1
    }
  }

  return res
}
