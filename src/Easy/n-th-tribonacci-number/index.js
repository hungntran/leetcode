/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  const fibo = [0, 1, 1, 2]

  if (n <= 3) {
    return fibo[n]
  }

  let i = 4

  while (i <= n) {
    fibo[i] = fibo[i - 1] + fibo[i - 2] + fibo[i - 3]
    i++
  }

  return fibo[n]
}
