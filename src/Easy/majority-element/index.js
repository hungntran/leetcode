/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function (nums) {
  // Boyer Moore Voting Algorithm
  let majority = null;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      majority = num;
    }

    count += num === majority ? 1 : -1;
  }

  return majority;
};
