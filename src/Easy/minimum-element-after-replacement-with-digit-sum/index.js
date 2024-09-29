/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    let min = Number.MAX_SAFE_INTEGER

    for (const num of nums) {
        const sum = num.toString().split('').reduce((a, b) => +a + +b)
        min = Math.min(min, sum)
    }

    return min
};