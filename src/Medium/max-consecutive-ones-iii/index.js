/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
    let left = 0
    let right = 0
    let zeroCount = 0
    let maxLength = 0

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount += 1
        }

        while (zeroCount > k) {
            if (nums[left] === 0) {
                zeroCount -= 1
            }

            left += 1
        }

        maxLength = Math.max(maxLength, right - left + 1)
        right += 1
    }

    return maxLength
}
