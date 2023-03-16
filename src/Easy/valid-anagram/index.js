/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const map = {};

  for (const c of s) {
    map[c] = (map[c] || 0) + 1;
  }

  for (const c of t) {
    if (!map[c] || map[c] < 0) return false;
    map[c] -= 1;
  }

  return true;
};
