/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  const n = hand.length;

  if (n % groupSize !== 0) {
    return false;
  }

  hand.sort((a, b) => a - b);

  let cards = [];
  let temp = [];

  while (hand.length > 0) {
    const pop = hand.pop();
    const lastItem = cards.at(-1);

    if (lastItem === undefined) {
      cards.push(pop);
    } else {
      if (pop === lastItem) {
        temp.unshift(pop);
      } else if (pop === lastItem - 1) {
        cards.push(pop);
      } else {
        return false;
      }
    }

    if (cards.length === groupSize) {
      cards = [];
      hand.push(...temp);
      temp = [];
    }
  }

  return cards.length === 0 && temp.length === 0;
};
