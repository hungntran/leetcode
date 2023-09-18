/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const arr = mat.map((value, index) => ({
    index,
    value: value.filter((a) => a !== 0).length,
  }));

  arr.sort((a, b) => a.value - b.value);

  return arr.slice(0, k).map((a) => a.index);
};
