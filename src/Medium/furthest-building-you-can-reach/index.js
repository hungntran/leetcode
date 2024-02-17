/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
  const heap = new MaxPriorityQueue()

  for (let i = 0; i < heights.length - 1; i++) {
    const diff = heights[i + 1] - heights[i]
    if (diff <= 0) {
      continue
    }

    bricks -= diff
    heap.enqueue(diff)

    if (bricks < 0) {
      if (ladders === 0) {
        return i
      }

      ladders -= 1
      bricks += heap.dequeue().element
    }
  }

  return heights.length - 1
}
