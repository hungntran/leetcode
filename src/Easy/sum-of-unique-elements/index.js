/**
 * @param {number[]} nums
 * @return {number}
 */
const sumOfUnique = function (nums) {
  const map = {};

  for (const num of nums) {
    if (map[num] != null) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }

  let sum = 0;
  for (const num in map) {
    if (map[num] > 1) {
      continue;
    }

    sum += +num;
  }

  return sum;
};

export default sumOfUnique;
