/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = function (n) {
  let slow = n;
  let fast = getNext(n);

  while (fast !== 1 && slow !== fast) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }

  return fast === 1;
};

const getNext = (n) => {
  let digits = n.toString();
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += Math.pow(+digits[i], 2);
  }

  return sum;
};
