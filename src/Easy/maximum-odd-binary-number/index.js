/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function (s) {
  const n = s.length
  let oneCount = 0

  for (const c of s) {
    if (c === '1') oneCount += 1
  }

  return '1'.repeat(oneCount - 1) + '0'.repeat(n - oneCount) + '1'
}
