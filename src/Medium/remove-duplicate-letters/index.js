/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  const stack = [];
  const seen = new Set();
  const lastOccurMap = s.split('').reduce((acc, val, i) => {
    acc[val] = i;
    return acc;
  }, {});

  for (let i = 0; i < s.length; i++) {
    if (seen.has(s[i])) continue;

    while (
      stack.length > 0 &&
      s[i] < stack.at(-1) &&
      i < lastOccurMap[stack.at(-1)]
    ) {
      seen.delete(stack.pop());
    }

    seen.add(s[i]);
    stack.push(s[i]);
  }

  return stack.join('');
};
