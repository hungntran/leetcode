/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            return isSorted(nums.slice(i).concat(nums.slice(0, i)))
        }
    }

    return true
}

function isSorted(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) return false
    }

    return true
}
