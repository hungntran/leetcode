/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  num1 = num1.split('').map((e) => Number(e));
  num2 = num2.split('').map((e) => Number(e));
  const res = [];
  let carry = 0;

  while (num1.length > 0 || num2.length > 0) {
    const digit1 = num1.pop() || 0;
    const digit2 = num2.pop() || 0;
    const factor = digit1 + digit2 + carry;
    if (factor > 9) {
      carry = 1;
    } else {
      carry = 0;
    }

    res.push(factor % 10);
  }

  return (carry ? '1' : '') + res.reverse().join('');
};
