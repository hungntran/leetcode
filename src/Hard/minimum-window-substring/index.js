/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  const count = new Map()
  const window = new Map()

  for (const c of t) {
    count.set(c, (count.get(c) || 0) + 1)
  }

  let have = 0
  let need = count.size
  let res = Infinity
  let range = [-1, -1]
  let l = 0

  for (let r = 0; r < s.length; r++) {
    const c = s[r]
    window.set(c, (window.get(c) || 0) + 1)

    if (count.has(c) && count.get(c) === window.get(c)) {
      have += 1
    }

    while (have === need) {
      if (r - l + 1 < res) {
        res = r - l + 1
        range = [l, r]
      }

      window.set(s[l], window.get(s[l]) - 1)

      if (count.has(s[l]) && count.get(s[l]) > window.get(s[l])) {
        have -= 1
      }

      l += 1
    }
  }

  if (res === Infinity) {
    return ''
  }

  return s.slice(range[0], range[1] + 1)
}
