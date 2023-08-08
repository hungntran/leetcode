/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = parseInt(start + (end - start) / 2);

    if (nums[mid] == target) {
      return mid;
    }

    if (nums[start] <= nums[mid]) {
      if (target >= nums[start] && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    if (nums[mid] <= nums[end]) {
      if (target >= nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
};