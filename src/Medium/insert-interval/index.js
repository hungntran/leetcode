/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const n = intervals.length;
  const output = [];

  for (let i = 0; i < n; i++) {
    const [start, end] = newInterval;

    if (end < intervals[i][0]) {
      output.push(newInterval);
      return output.concat(intervals.slice(i));
    } else if (start > intervals[i][1]) {
      output.push(intervals[i]);
    } else {
      newInterval = [
        Math.min(start, intervals[i][0]),
        Math.max(end, intervals[i][1]),
      ];
    }
  }

  output.push(newInterval);
  return output;
};
