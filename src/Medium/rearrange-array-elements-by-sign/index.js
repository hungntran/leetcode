/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  const output = new Array(nums.length)
  let neg = 1
  let pos = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      output[pos] = nums[i]
      pos += 2
    } else {
      output[neg] = nums[i]
      neg += 2
    }
  }

  return output
}
