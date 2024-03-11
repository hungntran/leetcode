/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
  const map = {}

  for (let i = 0; i < order.length; i++) {
    map[order[i]] = i
  }

  return s
    .split('')
    .sort((a, b) => {
      const indexA = map[a] || 0
      const indexB = map[b] || 0
      return indexA - indexB
    })
    .join('')
}
