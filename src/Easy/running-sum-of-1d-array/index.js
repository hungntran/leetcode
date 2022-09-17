/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const runningSum = function (nums) {
  const res = [];
  let previousSum = 0;

  for (const num of nums) {
    previousSum += num;
    res.push(previousSum);
  }

  return res;
};
