/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let output = '';
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    let r = i,
      l = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > max) {
        max = r - l + 1;
        output = s.slice(l, r + 1);
      }

      l--;
      r++;
    }

    l = i;
    r = i + 1;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > max) {
        max = r - l + 1;
        output = s.slice(l, r + 1);
      }

      l--;
      r++;
    }
  }

  return output;
};
