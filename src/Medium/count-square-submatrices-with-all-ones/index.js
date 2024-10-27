/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
    const m = matrix.length
    const n = matrix[0].length
    const cache = new Map()
    let res = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res += dfs(i, j)
        }
    }

    return res

    function dfs(r, c) {
        if (r === m || c === n || matrix[r][c] === 0) {
            return 0
        }

        const key = `${r}_${c}`

        if (cache.has(key)) {
            return cache.get(key)
        }

        const res =
            1 + Math.min(dfs(r, c + 1), dfs(r + 1, c), dfs(r + 1, c + 1))
        cache.set(key, res)

        return res
    }
}
