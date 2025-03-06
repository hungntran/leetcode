/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
    const output = [-1, -1]
    const set = new Set()
    const nums = grid.flatMap(arr => arr)

    for (const num of nums) {
        const before = set.size
        set.add(num)
        const after = set.size

        if (before === after) output[0] = num
    }

    for (let i = 1; i <= grid.length ** 2; i++) {
        if (set.has(i)) continue
        output[1] = i
        break
    }

    return output
};
