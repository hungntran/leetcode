/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
  let count = 0;
  const res = [1, 0];

  for (const char of s) {
    const temp = widths[char.charCodeAt(0) - 97];

    if (count + temp > 100) {
      res[0] += 1;
      count = temp;
    } else {
      count += temp;
    }
  }

  res[1] = count;
  return res;
};
