/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const collection = position
    .map((p, i) => [p, speed[i]])
    .sort((a, b) => b[0] - a[0]);

  const stack = [];

  for (const [p, s] of collection) {
    stack.push((target - p) / s);
    if (stack.length >= 2 && stack.at(-1) <= stack.at(-2)) {
      stack.pop();
    }
  }

  return stack.length;
};
