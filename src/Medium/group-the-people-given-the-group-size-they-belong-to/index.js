/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  const output = [];

  groupSizes.forEach((size, index) => {
    const pos = size - 1;

    if (!output[pos]) {
      output[pos] = [];
    }

    output[pos].push(index);
  });

  return output.flatMap((item, index) => {
    if (item.length > index + 1) {
      return chunk(item, index + 1);
    }

    return [item];
  });
};

const chunk = (array, k) => {
  const output = [];

  for (let i = 0; i < array.length; i += k) {
    output.push(array.slice(i, i + k));
  }

  return output;
};
