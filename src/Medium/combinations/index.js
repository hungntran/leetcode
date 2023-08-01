/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const res = [];

  const backtracking = (i, n, k, acc = []) => {
    if (k === 0) {
      res.push([...acc]);
      return;
    }

    while (i <= n) {
      backtracking(i + 1, n, k - 1, [...acc, i]);
      i++;
    }
  };

  backtracking(1, n, k, []);

  return res;
};
