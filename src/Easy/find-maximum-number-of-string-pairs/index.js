/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function (words) {
  const map = {};
  let count = 0;

  for (const word of words) {
    if (map[word]) {
      count++;
    } else {
      map[word.split('').reverse().join('')] = true;
    }
  }

  return count;
};
