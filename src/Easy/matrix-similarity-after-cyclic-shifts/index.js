/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {boolean}
 */
var areSimilar = function (mat, k) {
  const m = mat.length;
  const n = mat[0].length;
  const shiftK = k % n;

  if (shiftK === 0) {
    return true;
  }

  for (let i = 0; i < m; i++) {
    let row;

    if (i % 2 === 0) {
      row = mat[i].slice(shiftK).concat(mat[i].slice(0, shiftK));
    } else {
      row = mat[i].slice(n - shiftK).concat(mat[i].slice(0, n - shiftK));
    }

    if (row.some((e, idx) => e !== mat[i][idx])) {
      return false;
    }
  }

  return true;
};
