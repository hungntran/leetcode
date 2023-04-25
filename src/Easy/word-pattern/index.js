/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
export const wordPattern = function (pattern, s) {
  const words = s.split(' ');

  if (words.length !== pattern.length) {
    return false;
  }

  const map = {};
  for (let i = 0; i < words.length; i++) {
    const kword = 'WORD_' + words[i];
    const kchar = 'LETTER_' + pattern[i];

    if (!map[kword] && !map[kchar]) {
      map[kchar] = words[i];
      map[kword] = pattern[i];
      continue;
    }

    if (map[kword] !== pattern[i] || map[kchar] !== words[i]) {
      return false;
    }
  }

  return true;
};
