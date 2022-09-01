/*
 * https://www.hackerrank.com/challenges/migratory-birds
 */

export function migratoryBirds(arr) {
  const map = {};

  for (const num of arr) {
    map[num] = (map[num] ?? 0) + 1;
  }

  let max = 0;
  let res = 0;
  for (let i = 1; i <= 5; i++) {
    const num = map[i];
    if (num > max) {
      max = num;
      res = i;
    }
  }

  return res;
}
