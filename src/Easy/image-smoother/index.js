/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const m = img.length;
  const n = img[0].length;
  const res = Array(m)
    .fill(0)
    .map((item) => Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      res[i][j] = helper(img, i, j);
    }
  }

  return res;
};

const helper = (img, x, y) => {
  let avg = 0;
  let count = 0;

  for (let i = x - 1; i < x + 2; i++) {
    for (let j = y - 1; j < y + 2; j++) {
      if (img[i]?.[j] !== undefined) {
        avg += img[i][j];
        count++;
      }
    }
  }

  return Math.floor(avg / count);
};
