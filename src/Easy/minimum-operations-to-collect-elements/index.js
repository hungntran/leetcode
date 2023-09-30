/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
  const collection = Array(k).fill(0);
  let count = 0;

  while (nums.length > 0) {
    const num = nums.pop();
    count++;

    if (num > k) continue;
    if (collection[num - 1]) continue;

    collection[num - 1] = num;

    if (collection.every((num) => num !== 0)) {
      return count;
    }
  }

  return k;
};
