/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const chars = s.split('').map((char) => (char === c ? 0 : -1));

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== 0) {
      continue;
    }

    let left = i - 1;
    let right = i + 1;

    while (left >= 0 && chars[left] !== 0) {
      if (chars[left] === -1) {
        chars[left] = chars[left + 1] + 1;
      } else {
        chars[left] = Math.min(chars[left], chars[left + 1] + 1);
      }
      left--;
    }

    while (right < chars.length && chars[right] !== 0) {
      if (chars[right] === -1) {
        chars[right] = chars[right - 1] + 1;
      } else {
        chars[right] = Math.min(chars[right], chars[right - 1] + 1);
      }
      right++;
    }
  }

  return chars;
};
