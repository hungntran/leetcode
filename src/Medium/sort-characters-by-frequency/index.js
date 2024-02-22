/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = {}

  for (const char of s) {
    if (map[char] == null) {
      map[char] = 0
    }

    map[char] += 1
  }

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => k.repeat(v))
    .join('')
}
