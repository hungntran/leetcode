/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
  const dp = new Map();
  let res = 1;

  arr.forEach((num) => {
    const length = (dp.get(num - difference) || 0) + 1;
    dp.set(num, length);
    res = Math.max(length, res);
  });

  return res;
};
