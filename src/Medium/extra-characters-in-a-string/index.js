/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {number}
 */
var minExtraChar = function (s, dictionary) {
    const n = s.length
    const set = new Set(dictionary)
    const cache = {}

    return dfs(0)

    function dfs(i) {
        if (i >= n) {
            return 0
        }

        if (cache[i] !== undefined) {
            return cache[i]
        }

        let res = 1 + dfs(i + 1)

        for (let j = i; j < n; j++) {
            const str = s.slice(i, j + 1)

            if (set.has(str)) {
                res = Math.min(res, dfs(j + 1))
            }
        }

        cache[i] = res
        return res
    }
};