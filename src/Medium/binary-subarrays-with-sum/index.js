/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  return slidingWindowAtMost(nums, goal) - slidingWindowAtMost(nums, goal - 1)

  function slidingWindowAtMost(nums, goal) {
    let start = 0,
      currentSum = 0,
      totalCount = 0

    for (let end = 0; end < nums.length; end++) {
      currentSum += nums[end]

      while (start <= end && currentSum > goal) {
        currentSum -= nums[start]
        start += 1
      }

      totalCount += end - start + 1
    }

    return totalCount
  }
}
