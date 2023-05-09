/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let sumS = calcSum(s);
  let sumT = calcSum(t);

  return String.fromCharCode(sumT - sumS);
};

const calcSum = (s) => {
  let sum = 0;
  for (const c of t) {
    sum += c.charCodeAt(0);
  }

  return sum;
};
