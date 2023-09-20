/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let n = nums.length - 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= n) {
      n = i;
    }
  }

  return n === 0;
};
