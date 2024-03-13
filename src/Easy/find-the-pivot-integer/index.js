/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
  let l = 1
  let r = n
  let sum = 0

  while (l <= r) {
    sum += l
    if (sum > 0) {
      sum -= r
      if (sum === 0 && l === r) return r
      r--
    }
    l++
  }

  return -1
}
