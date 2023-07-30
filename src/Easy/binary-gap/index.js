/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
  const str = n.toString(2);
  const right = str.lastIndexOf('1');
  const left = str.indexOf('1');

  if (left === right) {
    return 0;
  }

  let count = 0;
  let max = 0;

  for (let i = left; i <= right; i++) {
    if (str[i] === '0') {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }

  return max + 1;
};
