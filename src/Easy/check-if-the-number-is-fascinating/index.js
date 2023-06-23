/**
 * @param {number} n
 * @return {boolean}
 */
var isFascinating = function (n) {
  const s = n.toString();

  if (s.includes('0')) {
    return false;
  }

  const res = `${n}${n * 2}${n * 3}`;
  return (
    !res.includes('0') && res.length === 9 && new Set(res.split('')).size === 9
  );
};
