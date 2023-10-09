/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const left = binarySearch(nums, target, true);
  const right = binarySearch(nums, target, false);

  return [left, right];
};

function binarySearch(nums, target, leftPrefer) {
  let l = 0;
  let r = nums.length - 1;
  let i = -1;

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2);

    if (nums[mid] < target) {
      l = mid + 1;
    } else if (nums[mid] > target) {
      r = mid - 1;
    } else {
      i = mid;

      if (leftPrefer) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }

  return i;
}
