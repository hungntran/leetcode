/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
  const dp = [0]
  let i = 1

  while (true) {
    const num = i ** 2
    if (num > c) break
    dp.push(num)
    i++
  }

  for (const num of dp) {
    const b = c - num
    if (binarySearch(dp, b)) {
      return true
    }
  }

  return false
}

function binarySearch(arr, k) {
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    const mid = parseInt((l + r) / 2)

    if (arr[mid] === k) {
      return true
    }

    if (arr[mid] < k) {
      l = mid + 1
    } else {
      r = mid - 1
    }
  }

  return false
}
