/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
  const max = Math.max(...nums);
  let sum = 0;
  while (k > 0) {
    k--;
    sum += max + k;
  }
  return sum;
};
