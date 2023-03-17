/**
 * @param {string} s
 * @return {boolean}
 */
export const areNumbersAscending = function (s) {
  const tokens = s.split(' ');
  let checkpoint = -Infinity;

  for (const token of tokens) {
    const resolvedToken = Number(token);
    if (Number.isNaN(resolvedToken)) continue;
    if (resolvedToken <= checkpoint) return false;
    checkpoint = resolvedToken;
  }

  return true;
};
