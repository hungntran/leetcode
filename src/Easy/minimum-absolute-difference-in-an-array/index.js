/*
 * https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/
 */

export function minimumAbsoluteDifference(arr) {
  let min = Infinity;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const abs = Math.abs(arr[i] - arr[j]);

      if (abs < min) {
        min = abs;
      }
    }
  }
  return min;
}
