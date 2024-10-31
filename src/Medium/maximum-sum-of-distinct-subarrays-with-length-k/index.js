/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
    if (nums.length === 1) {
        return nums[0]
    }

    const map = new Map()
    const prefixSum = makePrefixSum(nums)
    let l = 0
    let r = 0
    let max = 0

    while (r < nums.length) {
        if (map.has(nums[r])) {
            const newLeft = map.get(nums[r]) + 1
            clearMap(l, newLeft - 1)
            l = newLeft
            map.set(nums[r], r)
            r += 1
            continue
        }

        map.set(nums[r], r)

        if (map.size === k) {
            max = Math.max(max, calcSum(l, r))
            map.delete(nums[l])
            l += 1
            r += 1
        } else {
            r += 1
        }
    }

    return max

    function clearMap(start, end) {
        for (let i = start; i <= end; i++) {
            map.delete(nums[i])
        }
    }

    function calcSum(start, end) {
        return prefixSum[end] - (prefixSum[start - 1] || 0)
    }
}

function makePrefixSum(nums) {
    const output = new Array(nums.length).fill(0)

    for (let i = 0; i < nums.length; i++) {
        output[i] = (output[i - 1] || 0) + nums[i]
    }

    return output
}
