/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
    const n = s.length
    const set = new Set()

    function helper(start) {
        if (start >= n) {
            return 0
        }

        let res = 0

        for (let end = start; end < n; end++) {
            const substr = s.slice(start, end + 1)

            if (set.has(substr)) {
                continue
            }

            set.add(substr)
            res = Math.max(res, 1 + helper(end + 1))
            set.delete(substr)
        }

        return res
    }

    return helper(0)
}
