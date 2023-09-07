/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const stack = [];
  let output = 0;

  heights.push(0);

  heights.forEach((value, index) => {
    const item = { index, value };

    while (value < stack.at(-1)?.value) {
      const pop = stack.pop();
      const area = pop.value * (index - pop.index);

      if (area > output) {
        output = area;
      }

      item.index = pop.index;
    }

    stack.push(item);
  });

  return output;
};
