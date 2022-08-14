/*
 * https://www.hackerrank.com/challenges/apple-and-orange
 */

export function countApplesAndOranges(s, t, a, b, apples, oranges) {
  const appleAmount = apples.reduce((prev, apple) => {
    const pos = apple + a;
    if (pos >= s && pos <= t) {
      return prev + 1;
    }

    return prev;
  }, 0);

  const orangeAmount = oranges.reduce((prev, orange) => {
    const pos = orange + b;
    if (pos >= s && pos <= t) {
      return prev + 1;
    }

    return prev;
  }, 0);

  return [appleAmount, orangeAmount];
}
