/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function (points) {
  let output = 0

  for (let i = 0; i < points.length - 1; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (check(i, j)) {
        output++
      }
    }
  }

  return output

  function check(i, j) {
    const [x, y] = points[i]
    const [x2, y2] = points[j]
    const isValid = (x <= x2 && y >= y2) || (x >= x2 && y <= y2)

    if (!isValid) {
      return false
    }

    const chisato = [Math.min(x, x2), Math.max(y, y2)]
    const takina = [Math.max(x, x2), Math.min(y, y2)]

    for (let k = 0; k < points.length; k++) {
      if (k === i || k === j) {
        continue
      }

      const [x3, y3] = points[k]

      if (
        x3 <= takina[0] &&
        x3 >= chisato[0] &&
        y3 <= chisato[1] &&
        y3 >= takina[1]
      ) {
        return false
      }
    }

    return true
  }
}
