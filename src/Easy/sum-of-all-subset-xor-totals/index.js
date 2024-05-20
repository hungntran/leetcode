/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  const n = nums.length
  let output = 0
  helper(0, 0)
  return output

  function helper(i, xor) {
    if (i >= n) {
      output += xor
      return
    }
    helper(i + 1, xor ^ nums[i])
    helper(i + 1, xor)
  }
}
