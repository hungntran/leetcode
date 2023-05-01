/**
 * @param {number[]} salary
 * @return {number}
 */
export const average = function (salary) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  for (const num of salary) {
    sum += num;

    if (num < min) {
      min = num;
    }

    if (num > max) {
      max = num;
    }
  }
  sum = (sum - min - max) / (salary.length - 2);
  return sum.toFixed(5);
};
