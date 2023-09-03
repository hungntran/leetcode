/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function (low, high) {
  let count = 0;

  while (low <= high) {
    check(low) ? count++ : null;
    low++;
  }

  return count;
};

const check = (num) => {
  const str = num.toString();

  if (str.length % 2 !== 0) {
    return false;
  }

  const n = str.length / 2;
  const [first, last] = [str.slice(0, n), str.slice(n)];

  return calc(first) === calc(last);
};

const calc = (digits) => {
  let sum = 0;

  for (const digit of digits) {
    sum += Number(digit);
  }

  return sum;
};
