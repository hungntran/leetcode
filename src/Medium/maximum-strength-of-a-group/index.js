/**
 * @param {number[]} nums
 * @return {number}
 */
var maxStrength = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  const { negative, positive } = nums.reduce(
    (aggregate, num) => {
      if (num === 0) return aggregate;

      if (num < 0) {
        aggregate.negative.push(num);
      } else {
        aggregate.positive.push(num);
      }

      return aggregate;
    },
    { negative: [], positive: [] }
  );

  negative.sort((a, b) => a - b);

  if (negative.length % 2 !== 0) {
    negative.pop();
  }

  if (positive.length === 0 && negative.length === 0) {
    return 0;
  }

  const neg = negative.reduce((a, b) => a * b, 1);
  const pos = positive.reduce((a, b) => a * b, 1);

  return neg * pos;
};
