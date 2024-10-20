/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    intervals.sort((a, b) => a[1] - b[1])

    let prev = intervals[0]
    let res = 0

    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) {
            res += 1
            continue
        }

        prev = intervals[i]
    }

    return res
};
