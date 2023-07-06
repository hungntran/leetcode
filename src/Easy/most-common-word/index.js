/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const map = {};

  paragraph
    .toLowerCase()
    .split(/\W/)
    .filter((word) => word)
    .forEach((word) => {
      if (banned.includes(word)) {
        return;
      }

      map[word] = (map[word] || 0) + 1;
    });

  let result = ['', 0];

  Object.entries(map).forEach(([key, value]) => {
    if (value > result[1]) {
      result = [key, value];
    }
  });

  return result[0];
};
