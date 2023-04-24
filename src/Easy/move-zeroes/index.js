/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = function (nums) {
  let snowBall = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      snowBall++;
      continue;
    }

    if (i !== i - snowBall) {
      nums[i - snowBall] = nums[i];
      nums[i] = 0;
    }
  }
};
