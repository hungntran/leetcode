/**
 * @param {number[]} nums
 * @return {number}
 */
export const missingNumber = function (nums) {
  let sum = nums.length;

  for (let i = 0; i < nums.length; i++) {
    sum -= nums[i];
    sum += i;
  }

  return sum;
};
