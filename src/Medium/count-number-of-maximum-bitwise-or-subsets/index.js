/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
    const max = nums.reduce((a, b) => a | b)
    const n = nums.length
    let output = 0

    helper(0, 0)

    return output


    function helper(i, cur = 0) {
        if (i >= n) {
            return
        }

        const nextCur = cur | nums[i]

        if (nextCur === max) {
            output += 1
        }

        helper(i + 1, nextCur)
        helper(i + 1, cur)
    }
};
