/**
 * @param {number[]} nums
 * @return {number}
 */
export const maximizeGreatness = function (nums) {
  if (nums.length === 1) return 0;

  nums.sort((a, b) => a - b);
  let result = 0;
  let left = 0;
  let right = left + 1;
  while (right < nums.length) {
    if (nums[right] > nums[left]) {
      result += 1;
      left++;
    }

    right++;
  }

  return result;
};
