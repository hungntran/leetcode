/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function (nums, k) {
    if (k <= 1) return 0

    let result = 0
    let product = 1

    let left = 0
    let right = 0

    while (right < nums.length) {
        product *= nums[right]

        while (product >= k) {
            product /= nums[left]
            left += 1
        }

        result += right - left + 1
        right += 1
    }

    return result
}
