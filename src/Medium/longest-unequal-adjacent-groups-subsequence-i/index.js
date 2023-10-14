/**
 * @param {number} n
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getWordsInLongestSubsequence = function (n, words, groups) {
  const output = [words[0]];

  for (let i = 1; i < n; i++) {
    if (groups[i] !== groups[i - 1]) {
      output.push(words[i]);
      continue;
    }

    let j = i + 1;
    while (j < n) {
      if (groups[j] !== groups[i - 1]) {
        output.push(words[j]);
        i = j;
        break;
      }
      j++;
    }
  }

  return output;
};
