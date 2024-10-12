/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function (nums) {
    const output = []

    for (const num of nums) {
        output.push(helper(num))
    }

    return output
};

function helper(num) {
    for (let i = 1; i <= num; i++) {
        if ((i | (i + 1)) === num) {
            return i
        }
    }

    return -1
}
