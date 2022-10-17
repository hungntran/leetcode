/**
 * @param {string} sentence
 * @return {boolean}
 */
export const checkIfPangram = function (sentence) {
  const set = new Set(sentence.split(''));
  return set.size === 26;
};
