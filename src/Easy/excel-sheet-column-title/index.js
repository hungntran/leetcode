/**
 * @param {number} columnNumber
 * @return {string}
 */
export const convertToTitle = function (columnNumber) {
  let res = [];

  while (columnNumber > 0) {
    columnNumber--;
    const curr = columnNumber % 26;
    columnNumber = Math.floor(columnNumber / 26);
    res.push(String.fromCharCode(curr + 65));
  }

  return res.reverse().join('');
};
