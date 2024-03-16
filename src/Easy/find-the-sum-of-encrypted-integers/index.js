/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function (nums) {
  let sum = 0

  for (const num of nums) {
    sum += encrypt(num)
  }

  return sum
}

function encrypt(x) {
  let max = 0
  const digits = x
    .toString()
    .split('')
    .map((num) => {
      max = Math.max(max, +num)
    })

  return +String(max).repeat(digits.length)
}
