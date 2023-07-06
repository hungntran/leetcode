/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  return Math.min(Math.max(parseInt(s) || 0, 2 ** 31 * -1), 2 ** 31 - 1);
};
