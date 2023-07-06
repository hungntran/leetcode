/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const n = nums.length;

  nums.sort((a, b) => a - b);

  const res = [];
  const set = new Set();

  for (let i = 0; i < n; i++) {
    for (let left = i + 1, right = n - 1; left < right; ) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        const key = `${nums[i]} ${nums[left]} ${nums[right]}`;

        if (!set.has(key)) {
          set.add(key);
          res.push([nums[i], nums[left], nums[right]]);
        }

        left++;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return res;
};
