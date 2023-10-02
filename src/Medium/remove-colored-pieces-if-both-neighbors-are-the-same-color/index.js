/**
 * @param {string} colors
 * @return {boolean}
 */
var winnerOfGame = function (colors) {
  let prev = colors[0];
  let count = { A: 0, B: 0 };
  let turn = { A: 0, B: 0 };

  for (const color of colors) {
    if (color !== prev) {
      turn[prev] += Math.max(count[prev] - 2, 0);
      count[prev] = 0;
    }

    count[color] += 1;
    prev = color;
  }

  turn.A += Math.max(count.A - 2, 0);
  turn.B += Math.max(count.B - 2, 0);

  return turn.A > turn.B;
};
