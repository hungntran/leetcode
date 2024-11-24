/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
    const n = matrix.length
    let sum = 0
    let count = 0
    let min = Infinity

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] <= 0) {
                count += 1
            }

            const num = Math.abs(matrix[i][j])
            sum += num
            min = Math.min(min, num)
        }
    }

    if (count % 2 === 0) {
        return sum
    }

    return sum - 2 * min
}
