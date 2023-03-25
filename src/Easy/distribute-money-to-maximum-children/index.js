/**
 * @param {number} money
 * @param {number} children
 * @return {number}
 */
export const distMoney = function (money, children) {
  if (money < children) {
    return -1;
  }

  money = money - children;
  let result = 0;
  while (money > 0 && result < children) {
    money -= 7;

    if (money >= 0) {
      result += 1;
    }

    if (money === 3 && result === children - 1) {
      return result - 1;
    }
  }

  if (money > 0) return result - 1;

  return result;
};
