/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  for (let i = 0; i < nums1.length; i++) {
    const j = nums2.indexOf(nums1[i]);
    nums1[i] = helper(nums2, j, nums1[i]);
  }
  return nums1;
};

const helper = (nums2, j, k) => {
  if (j < 0) return -1;

  while (j < nums2.length) {
    if (nums2[j] > k) {
      return nums2[j];
    }
    j++;
  }
  return -1;
};
