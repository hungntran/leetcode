/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function (n, words, groups) {
  const dp = words.map((word) => [word]);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (groups[i] !== groups[j] && isHammingDistance(words[i], words[j])) {
        if (dp[i].length <= dp[j].length) {
          dp[i] = [...dp[j], words[i]];
        }
      }
    }
  }

  let result = [];

  for (const seq of dp) {
    if (seq.length > result.length) {
      result = seq;
    }
  }

  return result;
};

function isHammingDistance(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count += 1;
  }

  return count <= 1;
}