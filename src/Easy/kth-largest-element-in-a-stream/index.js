/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.nums = nums.sort((a, b) => b - a);
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  if (this.nums.length === 0) {
    this.nums.push(val);
  } else {
    for (let i = 0; i < this.nums.length; i++) {
      if (val > this.nums[i]) {
        this.nums.splice(i, 0, val);
        return this.nums[this.k - 1];
      }
    }

    this.nums.push(val);
  }

  return this.nums[this.k - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
