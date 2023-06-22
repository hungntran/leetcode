/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  const max = Math.max(...nums);

  return nums.every((num) => {
    if (num === max) {
      return true;
    }

    return max >= num * 2;
  })
    ? nums.indexOf(max)
    : -1;
};
