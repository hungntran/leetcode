/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = function (a, b) {
  let result = '';
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let sum = carry;

    if (a[i] === '1') sum += 1;
    if (b[j] === '1') sum += 1;

    if (sum >= 2) {
      carry = 1;
      result += sum % 2;
    } else {
      carry = 0;
      result += sum;
    }

    i--;
    j--;
  }

  if (carry) {
    result += '1';
  }

  return result.split('').reverse().join('');
};
