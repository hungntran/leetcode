/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
  const set = new Set(nums1)
  let prev = null

  for (const num of nums2) {
    if (num === prev) {
      continue
    }

    const prevSize = set.size
    set.add(num)

    if (prevSize === set.size) {
      return num
    }

    prev = num
  }

  return -1
}
