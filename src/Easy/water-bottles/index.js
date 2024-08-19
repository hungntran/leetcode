/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let max = numBottles
  let emptyBottles = numBottles

  while (numBottles > 0) {
    numBottles = parseInt(emptyBottles / numExchange)
    emptyBottles -= numBottles * numExchange
    max += numBottles
    emptyBottles += numBottles
  }

  return max
}
