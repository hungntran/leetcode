/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  const n = nums.length;

  let start = 0;
  let end = n - 1;

  while (start <= end) {
    const mid = parseInt(start + (end - start) / 2);

    if (nums[mid] === target) {
      return true;
    }

    if (nums[start] === nums[mid]) {
      start++;
      continue;
    }

    if (nums[mid] <= nums[start]) {
      if (target > nums[mid] && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else {
      if (target < nums[mid] && target >= nums[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }

  return false;
};
