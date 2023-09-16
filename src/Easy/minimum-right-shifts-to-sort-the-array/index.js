/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumRightShifts = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      const isSorted = checkSorted(nums.slice(i));
      if (isSorted && nums.at(-1) <= nums[i - 1]) {
        return nums.length - i;
      }

      return -1;
    }
  }

  return 0;
};

const checkSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};

minimumRightShifts([88, 35, 38, 67, 79, 44, 45, 72, 11, 4]);
