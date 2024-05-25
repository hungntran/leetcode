/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const results = []
  const mapColors = new Map()
  const balls = {}

  for (const query of queries) {
    const [x, newColor] = query
    const ballColor = balls[x]

    if (ballColor) {
      const freq = mapColors.get(ballColor) || 0
      if (freq === 1) mapColors.delete(ballColor)
      else mapColors.set(ballColor, freq - 1)
    }

    balls[x] = newColor

    const freq = mapColors.get(newColor) || 0
    mapColors.set(newColor, freq + 1)

    results.push(mapColors.size)
  }

  return results
}
