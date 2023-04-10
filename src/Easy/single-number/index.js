/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumber = function (nums) {
  const map = {};
  for (const num of nums) {
    map[num] = (map[num] || 0) + 1;
  }

  for (const key in map) {
    if (map[key] === 1) {
      return +key;
    }
  }
};
