/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  const res = [];

  while (left <= right) {
    if (helper(left)) {
      res.push(left);
    }

    left++;
  }

  return res;
};

const helper = (number) => {
  if (number < 10) {
    return true;
  }

  const nums = number.toString().split('');
  for (let i = 0; i < nums.length; i++) {
    if (number % +nums[i] !== 0 || nums[i] === '0') {
      return false;
    }
  }

  return true;
};
