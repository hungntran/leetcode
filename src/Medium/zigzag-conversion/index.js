/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || s.length < numRows) {
    return s;
  }

  const rows = Array(numRows).fill('');
  let count = 0;
  let reverse = 1;

  for (let i = 0; i < s.length; i++) {
    rows[count] += s[i];
    count += reverse;

    if (count === numRows - 1 || count === 0) {
      reverse *= -1;
    }
  }

  return rows.join('');
};
