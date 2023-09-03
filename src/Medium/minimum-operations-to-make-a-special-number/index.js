/**
 * @param {string} num
 * @return {number}
 */
var minimumOperations = function (num) {
  let last5 = num.lastIndexOf('5');
  let last0 = num.lastIndexOf('0');

  return Math.min(
    helper0(num, last0, num.length - last0 - 1),
    helper5(num, last5, num.length - last5 - 1)
  );
};

const helper5 = (num, right, ope = 0) => {
  if (right === -1) {
    return num.length;
  }

  for (let i = right - 1; i >= 0; i--) {
    if (num[i] === '2' || num[i] === '7') {
      return ope;
    }

    ope++;
  }

  return num.length;
};

const helper0 = (num, right, ope = 0) => {
  if (right === -1) {
    return num.length;
  }

  for (let i = right - 1; i >= 0; i--) {
    if (num[i] === '0' || num[i] === '5') {
      return ope;
    }

    ope++;
  }

  return num.length - 1;
};
