/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let res = '';

  for (let i = 0; i < s.length; i += 2 * k) {
    const s1 = s.slice(i, i + k);
    const s2 = s.slice(i + k, i + 2 * k);
    res += s1.split('').reverse().join('') + s2;
  }

  return res;
};
