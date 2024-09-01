/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray = function (original, m, n) {
  if (m * n !== original.length) {
    return []
  }

  const output = []
  let i = 0
  
  while (i < original.length) {
    output.push(original.slice(i, i + n))
    i += n
  }

  return output
}
