/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const result = {};

  for (const word of strs) {
    const map = {};

    for (const char of word) {
      const charCode = char.charCodeAt(0);
      if (map[charCode] == null) {
        map[charCode] = 1;
      } else {
        map[charCode] += 1;
      }
    }

    const key = Object.entries(map)
      .map(([key, value]) => `${key}-${value}`)
      .join('_');

    result[key] = result[key] ? result[key].concat(word) : [word];
  }

  return Object.values(result);
};
