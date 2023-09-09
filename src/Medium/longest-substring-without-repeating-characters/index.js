/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const set = new Set();

  let left = 0;
  let output = 0;

  for (const letter of s) {
    while (set.has(letter)) {
      set.delete(s[left]);
      left += 1;
    }

    set.add(letter);
    output = Math.max(output, set.size);
  }

  return output;
};
