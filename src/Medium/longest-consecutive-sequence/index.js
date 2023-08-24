/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let result = 0;

  nums.forEach((num) => {
    if (set.has(num - 1)) {
      return;
    }

    let count = 1;
    let cur = num + 1;

    while (set.has(cur)) {
      count++;
      cur++;
    }

    result = Math.max(result, count);
  });

  return result;
};
