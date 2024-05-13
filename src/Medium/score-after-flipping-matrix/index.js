/**
 * @param {number[][]} grid
 * @return {number}
 */
var matrixScore = function (grid) {
  const m = grid.length
  const n = grid[0].length

  for (let i = 0; i < m; i++) {
    if (grid[i][0] === 0) {
      flipRow(i)
    }
  }

  for (let j = 0; j < n; j++) {
    let countOne = 0

    for (let i = 0; i < m; i++) {
      countOne += grid[i][j]
    }

    if (countOne < m - countOne) {
      flipCol(j)
    }
  }

  return grid.map((row) => parseInt(row.join(''), 2)).reduce((a, b) => a + b)

  function flipRow(i) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        grid[i][j] = 1
      } else {
        grid[i][j] = 0
      }
    }
  }

  function flipCol(j) {
    for (let i = 0; i < m; i++) {
      if (grid[i][j] === 0) {
        grid[i][j] = 1
      } else {
        grid[i][j] = 0
      }
    }
  }
}
