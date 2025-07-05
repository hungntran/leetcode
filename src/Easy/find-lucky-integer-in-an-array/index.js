/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
    const map = arr.reduce((prev, cur) => {
        if (prev[cur] != null) {
            prev[cur] += 1
        } else prev[cur] = 1

        return prev
    }, {})

    let max = -1

    Object.entries(map).forEach(([key, value]) => {
        if (key == value) {
            max = Math.max(max, value)
        }
    })

    return max
};
