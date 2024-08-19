/**
 * @param {number[]} difficulty
 * @param {number[]} profit
 * @param {number[]} worker
 * @return {number}
 */
var maxProfitAssignment = function (difficulty, profit, worker) {
  let result = 0

  const agg = difficulty.map((dif, i) => ({
    difficulty: dif,
    profit: profit[i],
  }))

  agg.sort((a, b) => {
    if (b.profit === a.profit) {
      return a.difficulty - b.difficulty
    }
    return b.profit - a.profit
  })

  worker.forEach((w) => {
    for (const { difficulty, profit } of agg) {
      if (w >= difficulty) {
        result += profit
        break
      }
    }
  })

  return result
}
