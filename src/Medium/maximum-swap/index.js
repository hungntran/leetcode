/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    const nums = num.toString().split('').map(Number)
    const n = nums.length
    const maxRightIndex = new Array(n)
    maxRightIndex[n - 1] = n - 1

    for (let i = n - 2; i >= 0; i--) {
        if (nums[maxRightIndex[i + 1]] < nums[i]) {
            maxRightIndex[i] = i
        } else {
            maxRightIndex[i] = maxRightIndex[i + 1]
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] < nums[maxRightIndex[i]]) {
            const temp = nums[i]
            nums[i] = nums[maxRightIndex[i]]
            nums[maxRightIndex[i]] = temp
            return Number(nums.join(''))
        }
    }

    return num
};
