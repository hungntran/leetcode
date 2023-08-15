/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function (s1, s2) {
  const map = {};

  s1.split(' ')
    .concat(s2.split(' '))
    .forEach((word) => {
      if (map[word] == null) {
        map[word] = 1;
      } else {
        map[word] += 1;
      }
    });

  return Object.entries(map)
    .filter(([, value]) => value === 1)
    .map(([key]) => key);
};
