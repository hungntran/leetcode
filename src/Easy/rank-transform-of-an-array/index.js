/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
    const sorted = arr.map((num, i) => [num, i]).sort((a, b) => a[0] - b[0])
    const output = []
    let rank = 1

    for (let i = 0; i < sorted.length; i++) {
        const prev = sorted[i - 1]
        const cur = sorted[i]

        if (prev?.[0] === cur[0]) {
            rank -= 1
        }

        output[cur[1]] = rank
        rank += 1
    }

    return output
};