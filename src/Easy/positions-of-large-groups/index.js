/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  let prev = s[0];
  let count = 1;
  const result = [];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === prev) {
      count += 1;
    } else {
      prev = s[i];

      if (count >= 3) {
        result.push([i - count, i - 1]);
      }

      count = 1;
    }
  }

  if (count >= 3) {
    result.push([s.length - count, s.length - 1]);
  }

  return result;
};
