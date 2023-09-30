/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function (nums) {
  const map = {};
  const cache = {
    0: 0,
    1: NaN,
    2: 1,
    3: 1,
  };

  nums.forEach((num) => (map[num] = (map[num] || 0) + 1));

  let minOpe = 0;

  for (const num in map) {
    const occur = map[num];
    const ope = calcOpe(occur);

    if (Number.isNaN(ope)) return -1;

    minOpe += ope;
  }

  return minOpe;

  function calcOpe(n) {
    if (cache[n] !== undefined) {
      return cache[n];
    }

    const byTwo = 1 + calcOpe(n - 2);
    const byThree = 1 + calcOpe(n - 3);

    if (Number.isNaN(byTwo) || Number.isNaN(byThree)) {
      cache[n] = byTwo || byThree;
    } else {
      cache[n] = Math.min(byTwo, byThree);
    }

    return cache[n];
  }
};
