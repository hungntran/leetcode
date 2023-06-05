/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  if (coordinates.length == 2) {
    return true;
  }

  const [x1, y1] = coordinates[0];
  const [x2, y2] = coordinates[1];
  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  for (let i = 2; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];

    if ((y - y1) * deltaX !== (x - x1) * deltaY) {
      return false;
    }
  }

  return true;
};
