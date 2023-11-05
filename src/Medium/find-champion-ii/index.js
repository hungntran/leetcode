/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  const indegrees = Array(n).fill(0);

  for (const [u, v] of edges) {
    indegrees[v] += 1;
  }

  let championCount = 0;
  let champion = -1;

  for (let i = 0; i < n; i++) {
    if (indegrees[i] === 0) {
      championCount += 1;
      champion = i;
    }
  }

  return championCount === 1 ? champion : -1;
};
