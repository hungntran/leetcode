/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  const change = { 5: 0, 10: 0 };

  for (const bill of bills) {
    if (bill === 5) {
      change[5] += 1;
    } else if (bill === 10 && change[5] > 0) {
      change[10] += 1;
      change[5] -= 1;
    } else if (bill === 20) {
      if (change[10] > 0 && change[5] > 0) {
        change[10] -= 1;
        change[5] -= 1;
      } else if (change[5] > 2) {
        change[5] -= 3;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};
