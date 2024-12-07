/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const set = new Set(nums)
    const sorted = Array.from(set).sort((a, b) => a - b)
    const indexK = sorted.indexOf(k)

    if (indexK === -1) {
        return k > sorted[0] ? -1 : sorted.length
    }

    if (indexK === 0) {
        return sorted.length - (indexK + 1)
    }

    return -1
};
