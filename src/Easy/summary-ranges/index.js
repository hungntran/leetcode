/**
 * @param {number[]} nums
 * @return {string[]}
 */
export const summaryRanges = function (nums) {
  const res = [];

  for (let i = 0; i < nums.length; i++) {
    const start = nums[i];
    while (i + 1 < nums.length && nums[i] + 1 === nums[i + 1]) {
      i++;
    }

    if (start === nums[i]) {
      res.push(`${start}`);
    } else {
      res.push(`${start}->${nums[i]}`);
    }
  }

  return res;
};
