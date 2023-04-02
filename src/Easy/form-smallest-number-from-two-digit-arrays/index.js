/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const minNumber = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  for (let i = 1; i <= 9; i++) {
    if (set1.has(i) && set2.has(i)) {
      return i;
    }
  }

  const min1 = Math.min(...set1);
  const min2 = Math.min(...set2);

  return Math.min(min1, min2) * 10 + Math.max(min1, min2);
};
