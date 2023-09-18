/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const res = [];
  dfs(0, [], 0);
  return res;

  function dfs(index, cur, total) {
    if (total === target) {
      res.push([...cur]);
      return;
    }

    if (index >= candidates.length || total > target) {
      return;
    }

    cur.push(candidates[index]);
    dfs(index, cur, total + candidates[index]);
    cur.pop();
    dfs(index + 1, cur, total);
  }
};
