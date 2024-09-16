/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
  const MAX_TIME = 24 * 60
  let min = Infinity
  const minutes = timePoints.map(timeToMinute)

  for (let i = 0; i < minutes.length - 1; i++) {
    for (let j = i + 1; j < minutes.length; j++) {
      if (minutes[i] === minutes[j]) {
        return 0
      }

      let diff = Math.abs(minutes[i] - minutes[j])
      diff = Math.min(
        diff,
        MAX_TIME - minutes[i] + minutes[j],
        MAX_TIME - minutes[j] + minutes[i]
      )
      min = Math.min(min, diff)
    }
  }

  return min
}

function timeToMinute(time) {
  const [hh, mm] = time.split(':')
  return +hh * 60 + +mm
}
