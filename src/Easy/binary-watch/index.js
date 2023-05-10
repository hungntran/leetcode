/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  if (turnedOn > 8) {
    return [];
  }

  const cache = {};
  const result = [];

  for (let i = 0; i < 12; i++) {
    for (let j = 0; j < 60; j++) {
      if (countBits(i, cache) + countBits(j, cache) === turnedOn) {
        result.push(`${i}:${String(j).padStart(2, '0')}`);
      }
    }
  }

  return result;
};

const countBits = function (n, cache = {}) {
  if (cache[n]) {
    return cache[n];
  }

  cache[n] = n.toString(2).replaceAll('0', '').length || 0;
  return cache[n];
};
