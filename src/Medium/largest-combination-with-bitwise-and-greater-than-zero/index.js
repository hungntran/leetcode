/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function (candidates) {
    const countBit = new Array(24).fill(0)

    for (let i = 0; i < 24; i++) {
        for (const num of candidates) {
            if ((num & (1 << i)) !== 0) {
                countBit[i] += 1
            }
        }
    }

    return Math.max(...countBit)
}
