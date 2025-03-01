/**
 * @param {number[]} nums
 * @return {number[]}
 */
var applyOperations = function (nums) {
    const output = []

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue
        if (nums[i] === nums[i + 1]) {
            output.push(nums[i] * 2)
            nums[i + 1] = 0
        } else {
            output.push(nums[i])
        }
    }

    return output.concat(new Array(nums.length - output.length).fill(0))
}
