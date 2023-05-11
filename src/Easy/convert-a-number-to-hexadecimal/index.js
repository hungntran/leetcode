/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {
  if (num < 0) {
    return (num + Math.pow(2, 32)).toString(16);
  }
  
  return num.toString(16);
};
