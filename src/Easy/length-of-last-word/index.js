/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function (s) {
  return s.trim().split(' ').at(-1).length;
};
