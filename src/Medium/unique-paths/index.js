/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m == 1 && n == 1) {
    return 1;
  }

  const memo = {};

  return bfs(0, 0);

  function bfs(i, j) {
    const key = `${i}_${j}`;

    if (memo[key]) {
      return memo[key];
    }

    if (i === m - 1 && j === n - 1) {
      return 0;
    }

    if ((i + 2 === m && j === n - 1) || (i + 1 === m && j + 2 === n)) {
      return 1;
    }

    let output = 0;

    if (i + 1 < m) {
      output += bfs(i + 1, j);
    }

    if (j + 1 < n) {
      output += bfs(i, j + 1);
    }

    memo[key] = output;
    return output;
  }
};
