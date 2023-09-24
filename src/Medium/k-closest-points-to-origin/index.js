/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  const queue = new MaxPriorityQueue({ priority: (item) => item.distance });

  for (const point of points) {
    queue.enqueue({ point, distance: calcDistanceToOrigin(point) });

    if (queue.size() > k) {
      queue.dequeue();
    }
  }

  return queue.toArray().map((item) => item.element.point);
};

const calcDistanceToOrigin = (point) => {
  return Math.sqrt(point[0] ** 2 + point[1] ** 2);
};
