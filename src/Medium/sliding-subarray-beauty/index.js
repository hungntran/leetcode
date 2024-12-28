/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var getSubarrayBeauty = function (nums, k, x) {
    const n = nums.length
    const freq = {}
    const output = []

    for (let i = 0; i <= n - k; i++) {
        if (i === 0) {
            const subarray = nums.slice(i, i + k)
            calcFreq(freq, subarray)
        } else {
            decreaseFreq(freq, nums[i - 1])
            increaseFreq(freq, nums[i + k - 1])
        }

        output.push(findBeauty(freq, x))
    }

    return output
}

function findBeauty(freq, x) {
    let count = 0

    for (let i = -50; i <= 0; i++) {
        count += freq[i] || 0

        if (count >= x) {
            return i
        }
    }

    return 0
}

function increaseFreq(freq, key) {
    if (freq[key] === undefined) {
        freq[key] = 0
    }

    freq[key] += 1
}

function decreaseFreq(freq, key) {
    if (freq[key] > 0) {
        freq[key] -= 1
    }

    if (!freq[key] || freq[key] <= 0) {
        delete freq[key]
    }
}

function calcFreq(freq, arr) {
    for (const num of arr) {
        if (freq[num] === undefined) {
            freq[num] = 0
        }

        freq[num] += 1
    }
}
