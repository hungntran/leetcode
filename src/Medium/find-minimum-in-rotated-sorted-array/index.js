/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let l = 0,
    r = nums.length - 1,
    min = nums[0];

  while (l <= r) {
    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l]);
      break;
    }

    const mid = l + parseInt((r - l) / 2);
    if (nums[mid] >= nums[l]) {
      min = Math.min(min, nums[l]);
      l = mid + 1;
    } else {
      min = Math.min(min, nums[mid]);
      r = mid - 1;
    }
  }

  return min;
};