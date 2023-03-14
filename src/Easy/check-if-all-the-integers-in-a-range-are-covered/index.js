/**
 * @param {number[][]} ranges
 * @param {number} left
 * @param {number} right
 * @return {boolean}
 */
export const isCovered = function (ranges, left, right) {
  for (let i = left; i <= right; i++) {
    let flag = false;
    for (const range of ranges) {
      if (isInclude(range, i)) {
        flag = true;
        break;
      }
    }

    if (!flag) return false;
  }

  return true;
};

const isInclude = (range, i) => {
  const [start, end] = range;
  if (i >= start && i <= end) {
    return true;
  }

  return false;
};
