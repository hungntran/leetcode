/**
 * @param {number[]} nums
 * @return {number}
 */
export const repeatedNTimes = function (nums) {
  const map = {};

  for (const num of nums) {
    if (map[num] === undefined) {
      map[num] = 1;
      continue;
    }

    return num;
  }

  return -1;
};
