/**
 * @param {string} s
 * @return {string}
 */
export const longestNiceSubstring = function (s) {
  if (s < 2) {
    return '';
  }
  
  let map = new Map();

  for (let sanhil of s) {
    map.set(sanhil, (map.get(sanhil) || 0) + 1);
  }

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i].toUpperCase()) && map.get(s[i].toLowerCase())) {
      continue;
    }
    let start = longestNiceSubstring(s.substring(0, i));
    let end = longestNiceSubstring(s.substring(i + 1));

    return start.length >= end.length ? start : end;
  }
  return s;
};
