/**
 * @param {number[]} arr
 * @return {number[][]}
 */
export const minimumAbsDifference = function (arr) {
  // [3,8,-10,23,19,-4,-14,27]
  // Find minimum abs diff:
  // - sort -> [-14,-10,-4,3,8,19,23,27]
  // - i = 0 -> min = 4, result = [[-14,-10]]
  // - i = 1 -> min = 4, result = [[-14,-10]]
  // - i = 2 -> min = 4, result = [[-14,-10]]
  // - i = 3 -> min = 4, result = [[-14,-10],[3,8]]
  // - i = 4 -> min = 4, result = [[-14,-10],[3,8]]
  // - i = 5 -> min = 4, result = [[-14,-10],[3,8], [19,23]]
  // - i = 6 -> min = 4, result = [[-14,-10],[3,8], [19,23], [23,27]]

  arr.sort((a, b) => a - b);
  let min = Infinity;
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    const cur = arr[i];
    const next = arr[i + 1];
    const sub = next - cur;

    if (sub === min) {
      result.push([cur, next]);
    } else if (sub < min) {
      min = sub;
      result = [[cur, next]];
    }
  }

  return result;
};
