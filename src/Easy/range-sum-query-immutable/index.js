/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  let sum = 0;
  this.nums = nums.map((num) => {
    sum += num;
    return sum;
  });
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  if (left === 0) {
    return this.nums[right];
  }

  return this.nums[right] - this.nums[left - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
