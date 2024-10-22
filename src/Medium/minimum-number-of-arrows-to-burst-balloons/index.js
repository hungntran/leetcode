/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
    points.sort((a, b) => a[0] - b[0])

    let arrow = 0
    let prev = points[0]

    for (let i = 1; i < points.length; i++) {
        const [start, end] = points[i]

        if (start <= prev[1]) {
            prev = [Math.max(start, prev[0]), Math.min(end, prev[1])]
        } else {
            prev = points[i]
            arrow += 1
        }
    }

    return arrow + 1
}
