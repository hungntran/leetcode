/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function (s) {
  let result = '';
  let count = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '*') {
      count++;
    } else if (count) {
      count--;
    } else {
      result = s[i] + result;
    }
  }

  return result;
};
