/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  customers += 'E';

  const n = customers.length;
  const rightY = Array(n);

  for (let i = n - 1; i >= 0; i--) {
    rightY[i] = (rightY[i + 1] ?? 0) + (customers[i] === 'Y' ? 1 : 0);
  }

  let min = Infinity;
  let curN = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    if (curN + rightY[i] < min) {
      min = curN + rightY[i];
      result = i;
    }

    curN += customers[i] === 'N' ? 1 : 0;
  }

  return result;
};
