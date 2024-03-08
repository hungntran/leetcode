/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let max = 0
  let set = new Set()
  const map = Array(101).fill(0)

  for (const num of nums) {
    map[num] += 1

    if (map[num] >= max) {
      if (map[num] > max) {
        set.clear()
        max = map[num]
      }

      set.add(num)
    }
  }

  return set.size * max
}
