/**
 * @param {number[][]} grid
 * @param {number} health
 * @return {boolean}
 */
var findSafeWalk = function (grid, health) {
    const m = grid.length
    const n = grid[0].length

    const visited = new Array(m).fill(0).map(() => new Array(n).fill(false))
    const cache = {}

    return helper(0, 0, health)

    function helper(i, j, health) {
        if (i < 0 || i >= m || j < 0 || j >= n) {
            return false
        }

        const cacheKey = `${i}_${j}_${health}`
        if (cacheKey in cache) {
            return cache[cacheKey]
        }

        if (visited[i][j]) {
            return false
        }

        health -= grid[i][j]

        if (i === m - 1 && j === n - 1 && health > 0) {
            return true
        }

        let res = false

        if (health > 0) {
            visited[i][j] = true
            res =
                helper(i, j + 1, health) ||
                helper(i, j - 1, health) ||
                helper(i + 1, j, health) ||
                helper(i - 1, j, health)
            visited[i][j] = false
        }

        cache[cacheKey] = res
        return res
    }
}
