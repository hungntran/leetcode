/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = {};
  let output = 0;

  for (const num of nums) {
    if (map[num] == null) {
      map[num] = 0;
    }

    output += map[num];
    map[num]++;
  }

  return output;
};
