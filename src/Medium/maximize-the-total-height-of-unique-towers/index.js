/**
 * @param {number[]} maximumHeight
 * @return {number}
 */
var maximumTotalSum = function (maximumHeight) {
    const sorted = maximumHeight.sort((a, b) => a - b)

    if (sorted.at(-1) < sorted.length) {
        return -1
    }

    let max = sorted.at(-1)
    let sum = max

    for (let i = sorted.length - 2; i >= 0; i--) {
        if (sorted[i] >= max) {
            max = max - 1
        } else {
            max = sorted[i]
        }

        if (max < 1) {
            return -1
        }

        sum += max
    }

    return sum
};
