/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
  const records = [];

  for (const ope of operations) {
    if (ope === '+') {
      records.push(records.at(-1) + records.at(-2));
      continue;
    }

    if (ope === 'D') {
      records.push(records.at(-1) * 2);
      continue;
    }

    if (ope === 'C') {
      records.pop();
      continue;
    }

    records.push(+ope);
  }

  return records.reduce((a, b) => a + b, 0);
};
