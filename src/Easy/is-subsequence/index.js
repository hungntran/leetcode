/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = function (s, t) {
  let currentIndex = 0;

  for (const char of t) {
    if (char === s[currentIndex]) {
      currentIndex += 1;
    }
  }

  return currentIndex === s.length;
};
