/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let sum = 0
    let left = 0
    let right = 0
    let len = 0
    let output = Number.MAX_SAFE_INTEGER

    while (right < nums.length) {
        sum += nums[right]
        len += 1

        while (sum >= target && left <= right) {
            output = Math.min(len, output)
            sum -= nums[left]
            len -= 1
            left += 1
        }

        right += 1
    }

    return output === Number.MAX_SAFE_INTEGER ? 0 : output
}
