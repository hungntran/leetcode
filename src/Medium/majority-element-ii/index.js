/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = {};
  const output = new Set();
  const k = nums.length / 3;

  for (const num of nums) {
    if (map[num] == null) {
      map[num] = 0;
    }

    map[num] += 1;

    if (map[num] > k) {
      output.add(num);
    }
  }

  return Array.from(output);
};
