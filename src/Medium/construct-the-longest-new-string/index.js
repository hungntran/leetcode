/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {number}
 */
var longestString = function (x, y, z) {
  const cache = {};

  const helper = (x, y, z, res) => {
    const lastChar = res.at(-1);
    const cacheIndex = `${lastChar}_${x}${y}${z}`;

    if (cache[cacheIndex]) {
      return cache[cacheIndex];
    }

    if (lastChar === 'A') {
      if (y === 0) {
        cache[cacheIndex] = res.length;
        return res.length;
      }

      cache[cacheIndex] = helper(x, y - 1, z, res + 'BB');
    } else if (lastChar === 'B') {
      if (x === 0 && z === 0) {
        return res.length;
      }

      const ab = z > 0 ? helper(x, y, z - 1, res + 'AB') : 0;
      const aa = x > 0 ? helper(x - 1, y, z, res + 'AA') : 0;
      cache[cacheIndex] = Math.max(ab, aa);
    }

    return cache[cacheIndex];
  };

  const startWithAA = x > 0 ? helper(x - 1, y, z, 'AA') : 0;
  const startWithBB = y > 0 ? helper(x, y - 1, z, 'BB') : 0;
  const startWithAB = z > 0 ? helper(x, y, z - 1, 'AB') : 0;

  return Math.max(startWithAA, startWithAB, startWithBB);
};
