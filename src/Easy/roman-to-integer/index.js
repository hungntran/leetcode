/**
 * @param {string} s
 * @return {number}
 */
export const romanToInt = function (s) {
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    const value = CALCULATOR[s[i] + s[i + 1]];
    if (value) {
      sum += value;
      i++;
    } else {
      sum += CALCULATOR[s[i]];
    }
  }
  return sum;
};

const CALCULATOR = {
  I: 1,
  IV: 4,
  IX: 9,
  V: 5,
  X: 10,
  XL: 40,
  XC: 90,
  L: 50,
  C: 100,
  CD: 400,
  CM: 900,
  D: 500,
  M: 1000,
};
