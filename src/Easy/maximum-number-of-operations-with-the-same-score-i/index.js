/**
 * @param {number[]} nums
 * @return {number}
 */
var maxOperations = function (nums) {
  let score = nums[0] + nums[1]
  let output = 1

  for (let i = 2; i < nums.length - 1; i += 2) {
    if (nums[i] + nums[i + 1] !== score) {
      return output
    }

    output += 1
  }

  return output
}
