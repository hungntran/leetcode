/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxMoves = function (grid) {
    const m = grid.length
    const n = grid[0].length
    const dp = new Array(m).fill(0).map((_) => new Array(n).fill(0))
    let result = 0

    for (let col = n - 2; col >= 0; col--) {
        for (let row = 0; row < m; row++) {
            const cur = grid[row][col]
            const top = grid[row - 1]?.[col + 1] || 0
            const mid = grid[row][col + 1] || 0
            const bottom = grid[row + 1]?.[col + 1] || 0

            if (cur === Math.max(cur, top, mid, bottom)) {
                dp[row][col] = 0
                continue
            }

            let moves = 0

            if (cur < top) moves = Math.max(moves, dp[row - 1]?.[col + 1] || 0)
            if (cur < mid) moves = Math.max(moves, dp[row][col + 1] || 0)
            if (cur < bottom)
                moves = Math.max(moves, dp[row + 1]?.[col + 1] || 0)

            dp[row][col] = moves + 1

            if (col === 0) {
                result = Math.max(result, dp[row][col])
            }
        }
    }

    return result
}
