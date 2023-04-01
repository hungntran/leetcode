/**
 * @param {string} s
 * @param {string} chars
 * @param {number[]} vals
 * @return {number}
 */
export const maximumCostSubstring = function (s, chars, vals) {
  const mapValue = new Map();
  for (let i = 0; i < chars.length; i++) {
    mapValue.set(chars[i], vals[i]);
  }

  const mappingS = [];
  for (let i = 0; i < s.length; i++) {
    if (mapValue.has(s[i])) {
      mappingS[i] = mapValue.get(s[i]);
      continue;
    }

    mappingS[i] = s[i].charCodeAt() - 96;
  }

  return findMaxCostSubstring(mappingS);
};

const findMaxCostSubstring = (arr) => {
  let max = 0;
  let currentSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > max) {
      max = currentSum;
    }

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return max;
};
