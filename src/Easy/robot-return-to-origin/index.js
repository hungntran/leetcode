/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  const pos = [0, 0];
  for (const move of moves) {
    switch (move) {
      case 'L':
        pos[0] -= 1;
        break;
      case 'R':
        pos[0] += 1;
        break;
      case 'U':
        pos[1] += 1;
        break;
      case 'D':
        pos[1] -= 1;
        break;
    }
  }

  return pos[0] === 0 && pos[1] === 0;
};
