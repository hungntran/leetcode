/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = Math.floor(s.length / 2);

  for (let i = 1; i <= n; i++) {
    if (s.replaceAll(s.slice(0, i), '') === '') {
      return true;
    }
  }

  return false;
};
