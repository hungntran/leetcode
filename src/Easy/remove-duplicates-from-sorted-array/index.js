/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function (nums) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (nums[right] > nums[left]) {
      nums[left + 1] = nums[right];
      left++;
    }

    right++;
  }

  return left + 1;
};
