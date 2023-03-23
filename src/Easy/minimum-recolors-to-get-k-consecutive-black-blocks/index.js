/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
export const minimumRecolors = function (blocks, k) {
  const n = blocks.length;
  let min = Infinity;
  let whiteCount = 0;
  let left = 0;
  let right = 0;
  while (right < n) {
    if (blocks[right] === 'W') {
      whiteCount++;
    }

    if (right - left + 1 === k) {
      min = Math.min(min, whiteCount);
      if (blocks[left] === 'W') {
        whiteCount--;
      }
      left++;
    }
    right++;
  }

  return min;
};
