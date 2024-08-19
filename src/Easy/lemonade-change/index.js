/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let balance = { 5: 0, 10: 0 }

  for (const bill of bills) {
    if (bill === 10) {
      if (balance[5] <= 0) return false
      balance[5] -= 1
    } else if (bill === 20) {
      if (balance[10] <= 0) {
        if (balance[5] < 3) return false
        balance[5] -= 3
      } else {
        if (balance[5] <= 0) return false
        balance[10] -= 1
        balance[5] -= 1
      }
    }

    balance[bill] += 1
  }

  return true
}
