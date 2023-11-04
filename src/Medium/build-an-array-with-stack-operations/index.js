/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function (target, n) {
  const output = [];
  let cur = 1;

  for (let i = 0; i < target.length; i++) {
    if (cur === target[i]) {
      cur += 1;
      output.push(PUSH);
      continue;
    }

    let popCount = target[i] - cur;

    while (popCount > 0) {
      output.push(PUSH);
      output.push(POP);
      popCount--;
    }

    cur = target[i] + 1;
    output.push(PUSH);
  }

  return output;
};

const PUSH = 'Push';
const POP = 'Pop';
