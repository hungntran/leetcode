/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = function (nums) {
  const set = new Set();

  for (const num of nums) {
    const currentSize = set.size;
    set.add(num);

    if (set.size === currentSize) {
      return true;
    }
  }

  return false;
};
