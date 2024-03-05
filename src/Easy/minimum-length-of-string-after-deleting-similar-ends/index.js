/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  if (s.length < 2) {
    return s.length
  }

  if (s[0] !== s.at(-1)) {
    return s.length
  }

  const target = s[0]
  let l = 0
  let r = s.length - 1

  while (s[l] === target) {
    l += 1
  }

  while (s[r] === target) {
    r -= 1
  }

  return minimumLength(s.slice(l, r + 1))
}
