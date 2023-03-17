/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxAscendingSum = function (nums) {
  let sum = 0;
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      sum = 0;
    }

    sum += nums[i];
    max = Math.max(max, sum);
  }

  return max;
};
