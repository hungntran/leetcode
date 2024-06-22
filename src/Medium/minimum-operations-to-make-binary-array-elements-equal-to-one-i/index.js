/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  let output = 0

  for (let i = 0; i <= nums.length - 3; i++) {
    if (nums[i] === 1) continue

    nums[i] = Math.abs(nums[i] - 1)
    nums[i + 1] = Math.abs(nums[i + 1] - 1)
    nums[i + 2] = Math.abs(nums[i + 2] - 1)

    output += 1
  }

  if (nums.some((num) => !num)) {
    return -1
  }

  return output
}

// [1,0,0,1,1,0,1,1,1,0,0,0,1,0,1] -> 9