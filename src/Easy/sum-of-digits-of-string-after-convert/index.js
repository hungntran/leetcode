/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let resolved = ''

  for (const c of s) {
    resolved += c.charCodeAt(0) - 'a'.charCodeAt(0) + 1
  }

  while (k > 0) {
    resolved = resolved
      .split('')
      .reduce((a, b) => +a + +b)
      .toString()
    k -= 1
  }

  return +resolved
}
