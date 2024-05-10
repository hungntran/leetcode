/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
  const A = []

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      A.push({ ans: [arr[i], arr[j]], frac: arr[i] / arr[j] })
    }
  }

  A.sort((a, b) => a.frac - b.frac)

  return A[k - 1].ans
}
