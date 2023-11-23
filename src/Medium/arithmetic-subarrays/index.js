/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const m = l.length;
  const output = [];

  for (let i = 0; i < m; i++) {
    const sub = nums.slice(l[i], r[i] + 1);
    output.push(isArithmetic(sub));
  }

  return output;
};

function isArithmetic(nums) {
  const sorted = [...nums].sort((a, b) => b - a);
  const k = sorted[1] - sorted[0];

  for (let i = 2; i < sorted.length; i++) {
    if (sorted[i] - sorted[i - 1] !== k) {
      return false;
    }
  }

  return true;
}
