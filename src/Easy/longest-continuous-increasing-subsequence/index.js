/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let count = 1;
  let res = count;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      res = Math.max(res, count);
      count = 1;
      continue;
    }

    count++;
  }

  return Math.max(res, count);
};
