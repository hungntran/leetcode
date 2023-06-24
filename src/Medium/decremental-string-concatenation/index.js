/**
 * @param {string[]} words
 * @return {number}
 */
var minimizeConcatenatedLength = function (words) {
  const cache = {};

  const helper = (i, first, last) => {
    const cacheIndex = `${i}_${first}_${last}`;

    if (cache[cacheIndex]) {
      return cache[cacheIndex];
    }

    if (i >= words.length) {
      return 0;
    }

    const append =
      helper(i + 1, first, words[i].at(-1)) - (last === words[i].at(0) ? 1 : 0);
    const prepend =
      helper(i + 1, words[i].at(0), last) - (first === words[i].at(-1) ? 1 : 0);

    cache[cacheIndex] = Math.min(append, prepend) + words[i].length;
    return cache[cacheIndex];
  };

  return helper(1, words[0].at(0), words[0].at(-1)) + words[0].length;
};
