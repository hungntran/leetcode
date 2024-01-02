/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  nums.sort((a, b) => a - b);

  const output = [];

  for (const num of nums) {
    if (output.length === 0) {
      output.push([num]);
      continue;
    }

    let i = 0;

    while (output[i] && output[i].at(-1) === num) {
      i++;
    }

    if (output[i]) {
      output[i].push(num);
    } else {
      output.push([num]);
    }
  }

  return output;
};

findMatrix([1, 3, 4, 1, 2, 3, 1]);
