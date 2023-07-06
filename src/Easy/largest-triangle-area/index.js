/**
 * @param {number[][]} points
 * @return {number}
 */
function largestTriangleArea(points) {
  let result = 0;

  for (let i = 0; i in points; i++) {
    for (let j = i + 1; j in points; j++) {
      for (let k = j + 1; k in points; k++) {
        const area = getArea(points[i], points[j], points[k]);

        result = Math.max(result, area);
      }
    }
  }

  return result;
}

function getArea(a, b, c) {
  return (
    Math.abs(
      a[0] * (b[1] - c[1]) + b[0] * (c[1] - a[1]) + c[0] * (a[1] - b[1])
    ) / 2
  );
}
