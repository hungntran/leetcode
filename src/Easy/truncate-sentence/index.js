/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const truncateSentence = function (s, k) {
  return s.trim().split(' ').slice(0, k).join(' ');
};

export default truncateSentence;
