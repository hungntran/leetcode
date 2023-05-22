/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  if (n < 2) {
    return n;
  }

  const fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }

  return fibonacci.at(-1);
};
