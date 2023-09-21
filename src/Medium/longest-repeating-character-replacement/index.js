/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let l = 0,
    r = 0;
  let maxCount = 0;
  let map = {};
  let output = 0;

  while (r < s.length) {
    const size = r - l + 1;
    if (!map[s[r]]) map[s[r]] = 0;
    map[s[r]] += 1;
    maxCount = Math.max(maxCount, map[s[r]]);

    if (size - maxCount <= k) {
      output = Math.max(output, size);
    } else {
      map[s[l]] -= 1;
      l += 1;
    }

    r += 1;
  }

  return output;
};
