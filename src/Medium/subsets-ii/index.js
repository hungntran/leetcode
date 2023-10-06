/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  const cur = [];
  const output = [];
  const cache = {};

  helper(0);

  return output;

  function helper(pos) {
    const key = cur.join('_');

    if (cache[key]) {
      return;
    }

    cache[key] = true;
    output.push([...cur]);

    for (let i = pos; i < nums.length; i++) {
      cur.push(nums[i]);
      helper(i + 1);
      cur.pop();
    }
  }
};
