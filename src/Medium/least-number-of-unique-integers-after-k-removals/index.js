/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function (arr, k) {
  const map = {}

  for (const num of arr) {
    if (map[num] == null) {
      map[num] = 0
    }

    map[num] += 1
  }

  const sorted = Object.values(map).sort((a, b) => a - b)

  for (let i = 0; i < sorted.length; i++) {
    k -= sorted[i]

    if (k === 0) {
      return sorted.length - (i + 1)
    } else if (k < 0) {
      return sorted.length - i
    }
  }

  return 0
}
