/**
 * @param {number[]} nums
 * @return {number}
 */
export const thirdMax = function (nums) {
  const arr = Array.from([...new Set(nums)]).sort((a, b) => a - b);
  return arr.at(-3) ?? arr.at(-1);
};
