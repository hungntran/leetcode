/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = Math.max(...nums)
    let curMin = 1,
        curMax = 1

    for (const num of nums) {
        if (num === 0) {
            curMin = 1
            curMax = 1
            continue
        }

        const tmp = curMax * num
        curMax = Math.max(tmp, curMin * num, num)
        curMin = Math.min(tmp, curMin * num, num)
        res = Math.max(res, curMax)
    }

    return res
}
