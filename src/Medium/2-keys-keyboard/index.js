/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
  if (n === 1) return 0

  return helper(1)

  function helper(k, operations = 1, copyCount = 1) {
    if (k === n) return operations
    if (k > n) return Infinity

    return Math.min(
      helper(k + copyCount, operations + 1, copyCount), // Paste
      helper(k + k, operations + 2, k) // Copy all and Paste
    )
  }
}
