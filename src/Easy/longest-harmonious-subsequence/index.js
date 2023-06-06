/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  const hashmap = {};

  for (const num of nums) {
    hashmap[num] = (hashmap[num] || 0) + 1;
  }

  let res = 0;

  for (const key in hashmap) {
    const count = hashmap[key];

    if (hashmap[+key + 1] !== undefined) {
      res = Math.max(res, count + hashmap[+key + 1]);
    }
  }

  return res;
};
