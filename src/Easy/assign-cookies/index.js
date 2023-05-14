/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let count = 0;

  while (s.length > 0) {
    const size = s.pop();
    while (g.length > 0) {
      const greed = g.pop();
      if (greed <= size) {
        count++;
        break;
      }
    }
  }

  return count;
};
