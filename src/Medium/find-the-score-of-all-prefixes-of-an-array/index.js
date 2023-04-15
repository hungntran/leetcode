/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findPrefixScore = function (nums) {
  const ans = [];
  let max = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }

    const score = (ans[i - 1] || 0) + nums[i] + max;
    ans.push(score);
  }

  return ans;
};
