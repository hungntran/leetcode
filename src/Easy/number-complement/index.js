/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  const bits = num.toString(2);
  let res = '';

  for (const bit of bits) {
    res += bit ^ 1;
  }

  return parseInt(res, 2);
};
