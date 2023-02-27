/**
 * @param {number[]} nums
 * @return {number}
 */
export const unequalTriplets = function (nums) {
  let res = 0;

  for (let i = 0; i <= nums.length - 3; i++) {
    for (let j = i + 1; j <= nums.length - 2; j++) {
      if (nums[j] === nums[i]) {
        continue;
      }

      for (let k = j + 1; k <= nums.length - 1; k++) {
        if (nums[k] === nums[j] || nums[k] === nums[i]) {
          continue;
        }

        res += 1;
      }
    }
  }
  
  return res;
};
