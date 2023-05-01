/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
  const setA = new Set();
  const setB = new Set();
  const common = [];

  for (let i = 0; i < A.length; i++) {
    setA.add(A[i]);
    setB.add(B[i]);

    let value = common[i - 1] || 0;

    if (A[i] === B[i]) {
      common.push(value + 1);
      continue;
    }

    if (setB.has(A[i])) {
      value += 1;
    }

    if (setA.has(B[i])) {
      value += 1;
    }

    common.push(value);
  }

  return common;
};
