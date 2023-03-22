/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
export const passThePillow = function (n, time) {
  const direction = Math.floor(time / (n - 1)) % 2;
  const step = time % (n - 1);
  return direction === 0 ? 1 + step : n - step;
};
