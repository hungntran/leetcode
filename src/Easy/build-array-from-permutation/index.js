/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const buildArray = function (nums) {
  return nums.map((item, index) => nums[nums[index]]);
};
