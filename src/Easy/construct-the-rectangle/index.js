/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  const max = Math.floor(Math.sqrt(area));

  for (let i = max; i >= 1; i--) {
    if (area % i === 0) {
      return [area / i, i];
    }
  }
};
