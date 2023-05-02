/**
 * @param {number[]} nums
 * @return {number}
 */
export const arraySign = function (nums) {
  let count = 0;
  for (const num of nums) {
    if (num === 0) {
      return 0;
    }

    if (num < 0) {
      count++;
    }
  }

  if (count % 2 === 0) {
    return 1;
  }

  return -1;
};
