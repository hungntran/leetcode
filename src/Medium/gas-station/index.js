/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const sumGas = gas.reduce((a, b) => a + b);
  const sumCost = cost.reduce((a, b) => a + b);

  if (sumGas < sumCost) {
    return -1;
  }

  let sum = 0;
  let start = i;

  for (let i = 0; i < gas.length; i++) {
    sum += gas[i] - cost[i];

    if (sum < 0) {
      sum = 0;
      start = i + 1;
    }
  }

  return start;
};
