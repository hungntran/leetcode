/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function (grid) {
  const n = grid.length
  const output = new Array(n - 2).fill(0).map((e) => new Array(n - 2))

  for (let i = 1; i < n - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      output[i - 1][j - 1] = findMax(grid, i, j)
    }
  }

  return output
}

function findMax(grid, i, j) {
  let max = -Infinity

  for (let x = -1; x < 2; x++) {
    for (let y = -1; y < 2; y++) {
      max = Math.max(max, grid[i + x][j + y])
    }
  }

  return max
}
