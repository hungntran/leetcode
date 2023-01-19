/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function (words) {
  return words.reduce((res, word, index, array) => {
    const words = [...array];
    words[index] = '';

    if (words.join(',').includes(word)) {
      return res.concat(word);
    }

    return res;
  }, []);
};
