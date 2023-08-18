/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximalNetworkRank = function (n, roads) {
  const graph = roads.reduce((prev, pair) => {
    const [a, b] = pair;
    prev[a] = prev[a] !== undefined ? prev[a].concat(b) : [b];
    prev[b] = prev[b] !== undefined ? prev[b].concat(a) : [a];
    return prev;
  }, {});

  let result = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const isConnected = graph[i]?.includes(j) || 0;
      const rank =
        (graph[i]?.length || 0) +
        (graph[j]?.length || 0) -
        (isConnected ? 1 : 0);

      result = Math.max(rank, result);
    }
  }

  return result;
};
