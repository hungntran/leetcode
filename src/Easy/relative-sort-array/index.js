/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const map = {}

  arr2.forEach((num, i) => {
    map[num] = i
  })

  return arr1.sort((a, b) => {
    if (map[a] !== undefined && map[b] !== undefined) {
      return map[a] - map[b]
    }

    if (map[a]) return -1
    if (map[b]) return 1

    return a - b
  })
}
