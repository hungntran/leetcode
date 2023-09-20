/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const stack = [];

  for (const item of intervals) {
    const source = stack.pop();

    if (!source) {
      stack.push(item);
      continue;
    }

    if (item[0] > source[1] || item[1] < source[0]) {
      stack.push(source);
      stack.push(item);
      continue;
    }

    const merged = [Math.min(source[0], item[0]), Math.max(source[1], item[1])];
    stack.push(merged);
  }

  return stack;
};
