/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  return countBits(x ^ y);
};

const countBits = function (n) {
  return n.toString('2').replaceAll('0', '').length;
};
