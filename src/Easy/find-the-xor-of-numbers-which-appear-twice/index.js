/**
 * @param {number[]} nums
 * @return {number}
 */
var duplicateNumbersXOR = function (nums) {
  const set = new Set()
  const duplicate = []

  nums.forEach((num) => {
    if (set.has(num)) {
      duplicate.push(num)
    } else {
      set.add(num)
    }
  })

  return duplicate.reduce((prev, num) => prev ^ num, 0)
}
