/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  const devices = bank
    .map((item) => item.replaceAll('0', '').length)
    .filter(Number);

  let output = 0;

  for (let i = 0; i < devices.length - 1; i++) {
    output += devices[i] * devices[i + 1];
  }

  return output;
};
