/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
  const [a, b, c] = nums

  if (a + b <= c || a + c <= b || c + b <= a) {
    return 'none'
  }

  if (a === b && b === c) {
    return 'equilateral'
  }

  if (a === b || a === c || c === b) {
    return 'isosceles'
  }

  return 'scalene'
}
