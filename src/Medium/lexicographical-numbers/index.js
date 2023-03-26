/**
 * @param {number} n
 * @return {number[]}
 */
export const lexicalOrder = function (n) {
  const res = [];
  for (let i = 1; i <= 9; i++) {
    dfs(i, n, res);
  }
  return res;
};

const dfs = (cur, n, res) => {
  if (cur > n) {
    return;
  }

  res.push(cur);
  for (let i = 0; i <= 9; i++) {
    const next = cur * 10 + i;
    if (next > n) {
      break;
    }

    dfs(next, n, res);
  }
};
