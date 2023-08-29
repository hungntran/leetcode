/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  const res = [];

  for (let i = 0; i < n; i++) {
    if (nums[i] === nums[i - 1]) {
      continue;
    }

    for (let left = i + 1, right = n - 1; left < right; ) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};
