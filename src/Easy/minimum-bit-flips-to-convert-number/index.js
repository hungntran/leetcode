/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function (start, goal) {
  const ss = start.toString(2).split('')
  const sg = goal.toString(2).split('')

  let count = 0

  while (ss.length > 0 || sg.length > 0) {
    const s = ss.pop() || '0'
    const g = sg.pop() || '0'
    if (s !== g) {
      count += 1
    }
  }

  return count
}
