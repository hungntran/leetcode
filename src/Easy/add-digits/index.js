/**
 * @param {number} num
 * @return {number}
 */
export const addDigits = function (num) {
  while (num > 9) {
    const digits = num.toString(10).split('');
    num = digits.reduce((a, b) => +a + +b);
  }

  return num;
};
