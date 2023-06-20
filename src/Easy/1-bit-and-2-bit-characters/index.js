/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  const n = bits.length;

  let i = 0;

  while (i < n - 1) {
    if (bits[i] === 0) {
      i += 1;
    } else {
      i += 2;
    }
  }

  return (i = n - 1 && bits[i] === 0);
};
