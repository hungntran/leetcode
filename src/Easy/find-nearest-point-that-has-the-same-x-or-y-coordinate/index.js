/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
export const nearestValidPoint = function (x, y, points) {
  let minDistance = Infinity;
  let result = Infinity;

  for (let i = 0; i < points.length; i++) {
    const [x2, y2] = points[i];

    if (x2 === x || y2 === y) {
      const dis = calcManhattanDistance(x, y, x2, y2);
      if (dis < minDistance) {
        minDistance = dis;
        result = i;
      }
    }
  }

  if (result === Infinity) {
    return -1;
  }

  return result;
};

const calcManhattanDistance = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};
