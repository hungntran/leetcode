/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
    return checkCuts(rectangles, 0) || checkCuts(rectangles, 1)
}

const checkCuts = (rectangles, dim) => {
    let gapCount = 0

    rectangles.sort((a, b) => a[dim] - b[dim])

    let furthestEnd = rectangles[0][dim + 2]

    for (let i = 1; i < rectangles.length; i++) {
        const rect = rectangles[i]

        if (furthestEnd <= rect[dim]) {
            gapCount += 1
        }

        furthestEnd = Math.max(furthestEnd, rect[dim + 2])
    }

    return gapCount >= 2
}
