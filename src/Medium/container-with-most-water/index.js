/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let result = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);

    if (area > result) {
      result = area;
    }

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return result;
};
