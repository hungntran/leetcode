/**
 * @param {string} s
 * @return {string}
 */
var lastNonEmptyString = function (s) {
  const map = {}
  let max = 0

  for (const c of s) {
    if (map[c] == null) {
      map[c] = 0
    }

    map[c] += 1
    max = Math.max(max, map[c])
  }

  const remainCharacters = Object.entries(map)
    .filter(([k, v]) => v === max)
    .map(([k, v]) => k)

  let res = ''

  for (let i = 0; i < s.length; i++) {
    if (remainCharacters.includes(s[i]) && map[s[i]] === 1) {
      res += s[i]
      continue
    }

    map[s[i]] -= 1
  }

  return res
}
