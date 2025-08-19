/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
    const chunks = []

    let count = 0

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] === 0) {
            count += 1
            continue
        }

        if (count > 0) {
            chunks.push(count)
            count = 0
        }
    }

    return chunks.reduce((acc, cur) => {
        // n * (n + 1) / 2
        const res = (cur * (cur + 1)) / 2
        return acc + res
    }, 0)
}
