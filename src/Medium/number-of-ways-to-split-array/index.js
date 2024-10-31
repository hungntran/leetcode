/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
    const n = nums.length
    const prefixSum = new Array(n).fill(0)

    for (let i = 0; i < n; i++) {
        prefixSum[i] = (prefixSum[i - 1] || 0) + nums[i]
    }

    const total = prefixSum.at(-1)
    let res = 0

    for (let i = 0; i < n - 1; i++) {
        if (prefixSum[i] >= total - prefixSum[i]) {
            res += 1
        }
    }

    return res
}
