/**
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function (s) {
  const S = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
  for (let i = 0, j = S.length - 1; i <= j; i++, j--) {
    if (S[i] !== S[j]) {
      return false;
    }
  }

  return true;
};
