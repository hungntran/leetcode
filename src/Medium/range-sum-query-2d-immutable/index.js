/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length
    this.sumMatrix = new Array(m).fill(0).map((_) => new Array(n).fill(0))

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            this.sumMatrix[i][j] =
                (this.sumMatrix[i][j - 1] || 0) + matrix[i][j]
        }
    }
}

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
    let sum = 0

    for (let i = row1; i <= row2; i++) {
        sum += this.sumMatrix[i][col2] - (this.sumMatrix[i][col1 - 1] || 0)
    }

    return sum
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
