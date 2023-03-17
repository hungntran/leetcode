/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findMaxAverage = function (nums, k) {
  const n = nums.length;
  let max = -Infinity;
  let store = 0;
  for (let i = 0; i < n; i++) {
    store += nums[i];

    if (i >= k - 1) {
      max = Math.max(max, store);
      store -= nums[i - (k - 1)];
    }
  }

  return max / k;
};
