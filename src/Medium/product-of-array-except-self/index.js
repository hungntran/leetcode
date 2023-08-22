/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;

  const prefix = Array(n);
  const postfix = Array(n);

  for (let i = 0; i < n; i++) {
    prefix[i] = nums[i] * (prefix[i - 1] ?? 1);
  }

  for (let i = n - 1; i >= 0; i--) {
    postfix[i] = nums[i] * (postfix[i + 1] ?? 1);
  }

  return nums.map((_, i) => {
    return (prefix[i - 1] ?? 1) * (postfix[i + 1] ?? 1);
  });
};