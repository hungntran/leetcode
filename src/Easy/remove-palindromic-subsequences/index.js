/**
 * @param {string} s
 * @return {number}
 */
export const removePalindromeSub = function (s) {
  for (let i = 0, j = s.length - 1; i < s.length, j >= 0; i++, j--) {
    if (j < i) return 1;
    if (s[i] !== s[j]) return 2;
  }
};
