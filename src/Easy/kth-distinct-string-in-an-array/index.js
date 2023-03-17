/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
export const kthDistinct = function (arr, k) {
  const map = {};
  const distinct = [];

  for (const c of arr) {
    map[c] = (map[c] || 0) + 1;
  }

  for (const [key, value] of Object.entries(map)) {
    if (value === 1) distinct.push(key);
  }

  return distinct[k - 1] || '';
};
