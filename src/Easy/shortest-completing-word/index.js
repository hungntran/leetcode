/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const charactes = licensePlate
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('');

  let replaceWord = '',
    isMatched = false,
    value = '';

  for (let word of words) {
    if (!isMatched || word.length < value.length) {
      replaceWord = word.toLowerCase();

      charactes.forEach((item) => {
        replaceWord = replaceWord.replace(item, '');
      });

      if (word.length - charactes.length === replaceWord.length) {
        isMatched = true;
        value = word;
      }
    }
  }

  return value;
};
