/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  const memo = Array(s.length).fill(false);

  const helper = (s, wordDict, start = 0) => {
    if (start > s.length - 1) {
      return;
    }

    for (const word of wordDict) {
      const end = start + word.length - 1;

      if (end > s.length - 1 || memo[end]) {
        continue;
      }

      if (s.slice(start, end + 1) === word) {
        memo[end] = true;
        helper(s, wordDict, end + 1);
      }
    }
  };

  helper(s, wordDict);
  return memo[s.length - 1];
};
