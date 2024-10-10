/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
    let maxRight = []

    for (let i = nums.length - 1; i >= 0; i--) {
        maxRight[i] = Math.max(nums[i], maxRight[i + 1] || 0)
    }

    console.log(maxRight)

    let l = 0
    let res = 0

    for (let r = 0; r < nums.length; r++) {
        while (nums[l] > maxRight[r]) {
            l += 1
        }

        res = Math.max(res, r - l)
    }

    return res
};
