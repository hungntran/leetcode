/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const prefix = [arr[0]]
  const output = []

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] ^ arr[i]
  }

  for (const q of queries) {
    const [l, r] = q
    if (l === r) output.push(arr[l])
    else output.push(prefix[r] ^ (prefix[l - 1] || 0))
  }

  return output
}
