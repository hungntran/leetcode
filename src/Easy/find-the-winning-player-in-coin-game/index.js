/**
 * @param {number} x
 * @param {number} y
 * @return {string}
 */
var losingPlayer = function(x, y) {
    let isAliceWin = false

    while (1) {
      x -= 1
      y -= 4

      if (x < 0 || y < 0) {
        break
      }

      isAliceWin = !isAliceWin
    }

    return isAliceWin ? 'Alice' : 'Bob'
};