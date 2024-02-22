/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
var sequentialDigits = function (low, high) {
  const arr = []

  for (let i = 1; i <= 9; i++) {
    for (let j = 0; j + i <= 9; j++) {
      arr.push(NUMS.slice(j, j + i))
    }
  }

  return arr.filter((e) => +e >= low && +e <= high).map(Number)
}

const NUMS = '123456789'
