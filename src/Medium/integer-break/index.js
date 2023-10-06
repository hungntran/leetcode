/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  const cache = { 1: 1 };

  return helper(n);

  function helper(num) {
    if (cache[num]) {
      return cache[num];
    }

    let max = 1;

    for (let i = 1; i <= num / 2; i++) {
      const mul = i * helper(num - i);
      max = Math.max(max, mul, i * (num - i));
    }

    cache[num] = max;
    return max;
  }
};
