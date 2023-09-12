/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const output = [];
  const cur = [];

  function helper(index) {
    if (index >= nums.length) {
      output.push(Array.from(cur));
      return;
    }

    cur.push(nums[index]);
    helper(index + 1);
    cur.pop();
    helper(index + 1);
  }

  helper(0);
  return output;
};
