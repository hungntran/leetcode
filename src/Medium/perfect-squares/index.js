/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const cache = {}
  return handler(n)

  function handler(n) {
    if (n <= 3) {
      return n
    }

    if (cache[n]) {
      return cache[n]
    }

    let i = 1
    let min = Infinity

    while (1) {
      const op = i * i
      if (op > n) {
        break
      }
      min = Math.min(min, 1 + handler(n - op))
      i++
    }

    cache[n] = min
    return min
  }
}
