/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (const c of magazine) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  for (const c of ransomNote) {
    const remain = map.get(c);
    if (remain && remain > 0) {
      map.set(c, remain - 1);
    } else {
      return false;
    }
  }

  return true;
};
