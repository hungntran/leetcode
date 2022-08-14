/*
 * https://www.hackerrank.com/challenges/between-two-sets
 */

export function getTotalX(a, b) {
  const min = a[a.length - 1];
  const max = b[0];

  const cm = findCommonMultiple(a, min, max);
  const cd = findCommonDivisors(b, min, max);

  if (cm.length < cd.length) {
    return getResult(cm, cd);
  }

  return getResult(cd, cm);
}

function findCommonMultiple(numbers, min, max) {
  const result = [];
  let i = min;
  while (i <= max) {
    if (numbers.every((num) => i % num === 0)) {
      result.push(i);
    }

    i++;
  }

  return result;
}

function findCommonDivisors(numbers, min, max) {
  const result = [];
  let i = min;

  while (i <= max) {
    if (numbers.every((num) => num % i === 0)) {
      result.push(i);
    }

    i++;
  }

  return result;
}

function getResult(a, b) {
  return a.reduce((res, num) => {
    if (b.includes(num)) {
      return res + 1;
    }

    return res;
  }, 0);
}
