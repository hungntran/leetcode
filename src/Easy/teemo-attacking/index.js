/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  let count = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    if (i > 0 && timeSeries[i] <= timeSeries[i - 1]) {
      count -= timeSeries[i - 1] - timeSeries[i] + 1;
    }
    count += duration;
    timeSeries[i] = timeSeries[i] + duration - 1;
  }

  return count;
};
