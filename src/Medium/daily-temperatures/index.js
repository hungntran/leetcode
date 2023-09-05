/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const output = Array(temperatures.length);
  const stack = [];

  temperatures.forEach((temperature, index) => {
    if (stack.length === 0) {
      stack.push({ temperature, index });
      return;
    }

    while (stack.length > 0 && temperature > stack.at(-1).temperature) {
      const item = stack.pop();
      output[item.index] = index - item.index;
    }

    stack.push({ temperature, index });
  });

  while (stack.length > 0) {
    const item = stack.pop();
    output[item.index] = 0;
  }

  return output;
};
