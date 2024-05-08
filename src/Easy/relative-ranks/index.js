/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  const sorted = [...score].sort((a, b) => b - a)

  const map = sorted.reduce((prev, cur, i) => {
    prev[cur] = getRankName(i)
    return prev
  }, {})

  return score.map((e) => map[e])
}

function getRankName(i) {
  if (i === 0) return 'Gold Medal'
  if (i === 1) return 'Silver Medal'
  if (i === 2) return 'Bronze Medal'
  return String(i + 1)
}
