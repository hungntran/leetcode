/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  return [
    [...set1].reduce((ans, num) => {
      if (!set2.has(num)) {
        ans.push(num);
      }

      return ans;
    }, []),
    [...set2].reduce((ans, num) => {
      if (!set1.has(num)) {
        ans.push(num);
      }

      return ans;
    }, []),
  ];
};
