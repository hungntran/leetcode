/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  const prefixSum = [...customers]
  const satisfied = [...customers]
  const n = customers.length

  for (let i = 0; i < n; i++) {
    prefixSum[i] = (prefixSum[i - 1] ?? 0) + customers[i]
    satisfied[i] = (satisfied[i - 1] ?? 0) + (grumpy[i] ? 0 : customers[i])
  }

  let output = 0

  for (let i = 0; i <= customers.length - minutes; i++) {
    const left = satisfied[i - 1] || 0
    const right = satisfied[i + minutes - 1] || 0
    const remain = satisfied.at(-1) - right + left
    const buff = (prefixSum[i + minutes - 1] || 0) - (prefixSum[i - 1] || 0)
    output = Math.max(output, remain + buff)
  }

  return output
}
