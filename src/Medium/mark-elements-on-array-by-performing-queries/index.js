/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
var unmarkedSumArray = function (nums, queries) {
  const output = []
  let total = 0
  let unmarkedArr = []

  nums.forEach((n, i) => {
    total += n
    unmarkedArr.push([n, i])
  })

  unmarkedArr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1]
    }

    return a[0] - b[0]
  })

  for (const q of queries) {
    const [i, k] = q

    const marked = unmarkedArr.find(([num, inx]) => inx === i)

    if (marked) {
      total -= marked[0]
      unmarkedArr = unmarkedArr.filter(([_, i]) => i !== marked[1])
    }

    if (total === 0) {
      output.push(0)
      continue
    }

    const takeUnmarked = unmarkedArr.slice(0, k)
    unmarkedArr = unmarkedArr.slice(k)
    total -= takeUnmarked.reduce((acc, [num, i]) => {
      return acc + num
    }, 0)

    output.push(total)
  }
  return output
}

unmarkedSumArray(
  [4, 4, 2, 3],
  [
    [2, 3],
    [1, 2],
  ]
)
