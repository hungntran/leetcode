/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    const n = nums.length
    const prefixSum = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        prefixSum[i] = (prefixSum[i - 1] || 0) + nums[i]
    }

    const total = prefixSum.at(-1)

    for (let i = 0; i < n; i++) {
        const left = prefixSum[i - 1] || 0
        const right = total - prefixSum[i]

        if (left === right) {
            return i
        }
    }

    return -1
}
