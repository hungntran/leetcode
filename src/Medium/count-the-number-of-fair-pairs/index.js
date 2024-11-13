/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countFairPairs = function (nums, lower, upper) {
    let res = 0
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length - 1; i++) {
        const l = lower - nums[i]
        const u = upper - nums[i]

        res += binarySearch(i + 1, u + 1) - binarySearch(i + 1, l)
    }

    return res

    // Find index that value < target
    function binarySearch(l, target) {
        let r = nums.length - 1

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2)

            if (nums[mid] >= target) {
                r = mid - 1
            } else {
                l = mid + 1
            }
        }

        return r
    }
}
