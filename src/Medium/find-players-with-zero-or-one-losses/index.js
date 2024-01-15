/**
 * @param {number[][]} matches
 * @return {number[][]}
 */
var findWinners = function (matches) {
  const loss = {};
  const winnerSet = new Set();

  for (const [w, l] of matches) {
    if (!loss[l]) loss[l] = 0;
    loss[l] += 1;
    winnerSet.add(w);
  }

  const answer = [[], []];

  answer[0] = Array.from(winnerSet)
    .filter((e) => loss[e] == null)
    .sort((a, b) => a - b);

  answer[1] = Object.entries(loss)
    .filter(([k, v]) => v === 1)
    .map(([k, v]) => Number(k))
    .sort((a, b) => a - b);

  return answer;
};
