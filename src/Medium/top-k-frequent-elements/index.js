/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = {};

  nums.forEach((num) => {
    if (map[num]) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  });

  const result = Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map(([key]) => +key)
    .slice(0, k);

  return result;
};