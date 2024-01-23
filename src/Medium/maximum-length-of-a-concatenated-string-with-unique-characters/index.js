/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function (arr) {
  let max = 0

  handler('', 0)

  return max

  function handler(s, i) {
    if (s.length !== new Set(s.split('')).size) {
      return
    }

    max = Math.max(max, s.length)

    for (let k = i; k < arr.length; k++) {
      handler(s + arr[k], k + 1)
    }
  }
}
