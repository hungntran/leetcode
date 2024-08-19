/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const output = []
  const map = nums1.reduce((prev, num) => {
    if (!prev[num]) prev[num] = 0
    prev[num] += 1
    return prev
  }, {})

  nums2.forEach((num) => {
    if (map[num] && map[num] > 0) {
      output.push(num)
      map[num] -= 1
    }
  })

  return output
}
