/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function (strs) {
  if (strs.length === 1) return strs[0];

  const n = strs[0].length;
  let result = '';
  for (let i = 0; i < n; i++) {
    const char = strs[0][i];
    if (!char || strs.some((str) => str[i] !== char)) {
      return result;
    }

    result += char;
  }

  return result;
};
