/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k, start = 0, end = nums.length - 1) {
  const index = partition(nums, start, end);

  if (index === k - 1) {
    return nums[index];
  }

  if (index < k - 1) {
    return findKthLargest(nums, k, index + 1, end);
  }

  return findKthLargest(nums, k, start, index - 1);
};

const partition = (nums, start, end) => {
  const pivot = nums[end];
  let left = start;
  let right = end - 1;

  while (left <= right) {
    if (nums[left] > pivot) {
      left++;
    } else if (nums[right] < pivot) {
      right--;
    } else {
      const tmp = nums[right];
      nums[right] = nums[left];
      nums[left] = tmp;
      left++;
      right--;
    }
  }

  [nums[end], nums[left]] = [nums[left], nums[end]];

  return left;
};