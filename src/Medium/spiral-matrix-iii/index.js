/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function (rows, cols, rStart, cStart) {
  const total = rows * cols

  let step = 0
  let direction = 1
  let output = [[rStart, cStart]]

  while (output.length < total) {
    if (direction === 1) {
      step += 1
      for (let i = 1; i <= step; i++) {
        cStart += 1
        if (isIndexValid(rStart, cStart)) {
          output.push([rStart, cStart])
        }
      }
    } else if (direction === 2) {
      for (let i = 1; i <= step; i++) {
        rStart += 1
        if (isIndexValid(rStart, cStart)) {
          output.push([rStart, cStart])
        }
      }
    } else if (direction === 3) {
      step += 1
      for (let i = 1; i <= step; i++) {
        cStart -= 1
        if (isIndexValid(rStart, cStart)) {
          output.push([rStart, cStart])
        }
      }
    } else if (direction === 4) {
      for (let i = 1; i <= step; i++) {
        rStart -= 1
        if (isIndexValid(rStart, cStart)) {
          output.push([rStart, cStart])
        }
      }
    }

    direction = (direction % 4) + 1
  }

  return output

  function isIndexValid(r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols) {
      return false
    }

    return true
  }
}
