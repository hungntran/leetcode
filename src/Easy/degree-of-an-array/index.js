/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const map = {};
  let elements = [];
  let degree = 0;

  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;

    if (map[nums[i]] === degree) {
      elements.push(nums[i]);
      continue;
    }

    if (map[nums[i]] > degree) {
      degree = map[nums[i]];
      elements = [nums[i]];
    }
  }

  return Math.min(...elements.map((num) => helper(nums, num)));
};

const helper = (nums, k) => {
  const left = nums.indexOf(k);
  const right = nums.lastIndexOf(k);

  return right - left + 1;
};
