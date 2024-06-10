/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const sorted = [...heights].sort((a, b) => a - b)

  return heights.reduce((prev, item, i) => {
    if (item === sorted[i]) {
      return prev
    }

    return prev + 1
  }, 0)
}
