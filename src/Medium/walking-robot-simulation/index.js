/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function (commands, obstacles) {
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ] // 0 - North, 1 - East, 2 - South, 3 - West
  let d = 0
  let res = 0
  let x = 0,
    y = 0

  const set = new Set()
  obstacles.forEach((e) => set.add(e.join('_')))

  for (const c of commands) {
    if (c === -1) {
      d = (d + 1) % 4
    } else if (c === -2) {
      d = (d + 3) % 4
    } else {
      const [dx, dy] = direction[d]
      for (let i = 1; i <= c; i++) {
        if (set.has([x + dx, y + dy].join('_'))) {
          break
        }

        x += dx
        y += dy
      }
    }

    res = Math.max(res, x ** 2 + y ** 2)
  }

  return res
}
