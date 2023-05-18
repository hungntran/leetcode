/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let max = 0;

  for (const num of nums) {
    if (num === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }

  return Math.max(max, count);
};
