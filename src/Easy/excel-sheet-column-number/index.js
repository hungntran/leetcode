/**
 * @param {string} columnTitle
 * @return {number}
 */
export const titleToNumber = function (columnTitle) {
  let res = 0;
  const n = columnTitle.length;

  for (let i = n - 1; i >= 0; i--) {
    const factor = columnTitle.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
    res += factor * Math.pow(26, n - 1 - i);
  }

  return res;
};
