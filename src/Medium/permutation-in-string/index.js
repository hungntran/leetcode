/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const size = s1.length;

  const sortedS1 = s1.split('').sort().join('');

  for (let i = 0; i <= s2.length - size; i++) {
    const sorted = s2
      .slice(i, i + size)
      .split('')
      .sort()
      .join('');

    if (sortedS1 === sorted) {
      return true;
    }
  }

  return false;
};
