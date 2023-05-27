/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  return nums
    .sort((a, b) => b - a)
    .reduce((acc, value, index) => {
      if (index % 2 !== 0) {
        return acc + value;
      }

      return acc;
    }, 0);
};
