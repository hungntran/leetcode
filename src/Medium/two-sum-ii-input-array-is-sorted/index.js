/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let right = numbers.length - 1;
  let left = 0;

  while (left <= right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    }

    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return false;
};

// left -> n
// right -> 0

// left + right < target -> left++;
// left + right > target -> right--;
// left + right = target -> done;
// left >= right -> false (never)
