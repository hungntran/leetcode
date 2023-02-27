/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const sortArrayByParity = function (nums) {
  const even = [];
  const odd = [];

  for (const num of nums) {
    if (num % 2 === 0) {
      even.push(num);
    } else {
      odd.push(num);
    }
  }

  return even.concat(odd);
};
