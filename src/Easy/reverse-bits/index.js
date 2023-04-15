/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
export const reverseBits = function (n) {
  let bits = n.toString(2).split('').reverse().join('');
  return parseInt(bits.padEnd(32, '0'), 2);
};
