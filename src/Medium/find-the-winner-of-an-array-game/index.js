/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function (arr, k) {
  if (k === 1) {
    return Math.max(arr[0], arr[1]);
  }

  if (k >= arr.length) {
    return Math.max(...arr);
  }

  let winCount = 0;
  let winner = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (winner > arr[i]) {
      winCount += 1;
    } else {
      winCount = 1;
      winner = arr[i];
    }

    if (winCount === k) {
      return winner;
    }
  }

  return winner;
};
