/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let output = 0

  nums.forEach((num) => {
    const mod = num % 3

    if (mod === 0) {
      return
    }
    output += Math.min(3 - mod, mod)
  })

  return output
}
