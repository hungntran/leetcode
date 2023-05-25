/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentCount = 0;
  let lateCount = 0;
  let maxConsecutive = 0;

  for (const c of s) {
    if (c === 'L') {
      lateCount += 1;
      continue;
    }

    if (c === 'A') {
      absentCount += 1;
    }

    maxConsecutive = Math.max(lateCount, maxConsecutive);
    lateCount = 0;
  }

  maxConsecutive = Math.max(lateCount, maxConsecutive);
  return absentCount < 2 && maxConsecutive < 3;
};
