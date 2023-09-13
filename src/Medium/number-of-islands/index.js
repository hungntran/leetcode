/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  const m = grid.length;
  const n = grid[0].length;

  const visited = Array(m)
    .fill(null)
    .map(() => Array(n).fill(false));

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j]) {
        continue;
      }

      if (grid[i][j] === '1') {
        count += 1;
        bfs(i, j);
      }
    }
  }

  return count;

  function bfs(i, j) {
    if (visited[i][j]) {
      return;
    }

    visited[i][j] = true;

    if (grid[i][j] === '1') {
      i - 1>= 0 && bfs(i - 1, j);
      i + 1 < m && bfs(i + 1, j);
      j + 1 < n && bfs(i, j + 1);
      j - 1 >= 0 && bfs(i, j - 1);
    }
  }
};
