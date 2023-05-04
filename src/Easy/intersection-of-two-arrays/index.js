/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersection = function (nums1, nums2) {
  const set = new Set(nums2);
  const res = new Set();

  nums1.forEach((num) => {
    if (set.has(num)) {
      res.add(num);
    }
  });

  return Array.from(res);
};
