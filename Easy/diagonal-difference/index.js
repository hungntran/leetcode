/**
 * https://www.hackerrank.com/challenges/diagonal-difference
 */

function diagonalDifference(matrix) {
  return Math.abs(calcDiagonalSum(matrix) - calcDiagonalSum(matrix, true));
}

function calcDiagonalSum(matrix, reverse) {
  const lastIndex = matrix.length - 1;

  return matrix.reduce((sum, row, currentIndex) => {
    const index = reverse ? lastIndex - currentIndex : currentIndex;
    console.log(index, row);
    return sum + row[index];
  }, 0);
}

const a = diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
console.log(a);
