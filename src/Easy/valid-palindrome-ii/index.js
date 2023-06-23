/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s, canRemove = true) {
  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    if (s[i] === s[j]) {
      continue;
    }

    if (canRemove) {
      return (
        validPalindrome(s.slice(i + 1, j + 1), false) ||
        validPalindrome(s.slice(i, j), false)
      );
    }

    return false;
  }

  return true;
};
