/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function (nums) {
  nums.forEach((row) => row.sort((a, b) => a - b));

  let res = 0;

  while (nums[0].length > 0) {
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i].pop();
      if (num > max) {
        max = num;
      }
    }
    res += max;
  }

  return res;
};
