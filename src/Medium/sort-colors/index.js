/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let red = 0
  let white = 0
  let blue = nums.length - 1

  while (white <= blue) {
    if (nums[white] === 0) {
      nums[white] = nums[red]
      nums[red] = 0
      white += 1
      red += 1
    } else if (nums[white] === 1) {
      white += 1
    } else if (nums[white] === 2) {
      nums[white] = nums[blue]
      nums[blue] = 2
      blue -= 1
    }
  }
}
