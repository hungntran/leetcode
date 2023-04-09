/**
 * @param {number} rowIndex
 * @return {number[]}
 */
export const getRow = function (rowIndex) {
  const res = [];
  for (let i = 0; i <= rowIndex; i++) {
    res.push(1);
    for (let j = i - 1; j > 0; j--) {
      res[j] = res[j] + res[j - 1];
    }
  }

  return res;
};
