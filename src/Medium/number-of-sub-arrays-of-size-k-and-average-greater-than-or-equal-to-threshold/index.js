/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let start = 0
    let sum = 0
    let res = 0

    for (let i = start; i < arr.length; i++) {
        const size = i - start + 1
        sum += arr[i]

        if (size !== k) {
            continue
        }

        if (sum / k >= threshold) {
            res += 1
        }

        sum -= arr[start]
        start += 1
    }

    return res
}
