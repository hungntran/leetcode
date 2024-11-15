/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function (arr) {
    let right = arr.length - 1

    while (right > 0 && arr[right] >= arr[right - 1]) {
        right -= 1
    }

    let ans = right
    let left = 0

    while (left < right && (left == 0 || arr[left] >= arr[left - 1])) {
        while (right < arr.length && arr[left] > arr[right]) {
            right += 1
        }

        ans = Math.min(ans, right - left - 1)
        left += 1
    }

    return ans
};
