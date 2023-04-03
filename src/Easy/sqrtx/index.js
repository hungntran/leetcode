/**
 * @param {number} x
 * @return {number}
 */
export const mySqrt = function (x) {
  let y = 0;

  while ((y + 1) * (y + 1) <= x) {
    y = y + 1;
  }

  return y;
};
