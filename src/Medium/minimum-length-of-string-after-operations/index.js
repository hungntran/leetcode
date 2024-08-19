/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const map = {}

  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (!map[c]) map[c] = 0
    map[c] += 1
  }

  return Object.values(map).reduce((prev, cur) => {
    if (cur <= 2) return prev + cur
    prev += cur % 2 !== 0 ? 1 : 2
    return prev
  }, 0)
}
