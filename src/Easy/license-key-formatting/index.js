/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
export const licenseKeyFormatting = function (s, k) {
  const tempS = s.replaceAll('-', '').toUpperCase();
  let i = 0;
  const result = [];
  while (i < tempS.length) {
    const code = tempS.slice(-k - i, -i || undefined);
    result.push(code);
    i += k;
  }

  return result.reverse().join('-');
};
