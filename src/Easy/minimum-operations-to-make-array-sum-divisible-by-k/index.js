/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const sum = nums.reduce((a, b) => a + b)
    const mod = sum % k
    return mod
}
