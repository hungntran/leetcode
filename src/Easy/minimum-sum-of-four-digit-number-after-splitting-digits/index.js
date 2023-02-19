/**
 * @param {number} num
 * @return {number}
 */
export const minimumSum = function (num) {
  const nums = num.toString().split('').sort();
  return +(nums[0] + nums[2]) + +(nums[1] + nums[3]);
};
