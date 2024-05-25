/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @param {number} x
 * @return {number[]}
 */
var occurrencesOfElement = function (nums, queries, x) {
  const indexOfX = []

  nums.forEach((num, i) => {
    if (num === x) {
      indexOfX.push(i)
    }
  })

  return queries.map((query) => {
    return indexOfX[query - 1] ?? -1
  })
}
