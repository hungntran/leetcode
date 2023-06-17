/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  const groups = [1];

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      groups[groups.length - 1] += 1;
    } else {
      groups.push(1);
    }
  }

  let ans = 0;
  for (let i = 1; i < groups.length; i++) {
    ans += Math.min(groups[i], groups[i - 1]);
  }

  return ans;
};
