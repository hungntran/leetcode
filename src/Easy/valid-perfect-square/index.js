/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const square = mid * mid;
    if (square === num) {
      return true;
    }

    if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return false;
};
