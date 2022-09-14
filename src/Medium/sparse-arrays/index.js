/*
 * https://www.hackerrank.com/challenges/sparse-arrays/
 */

export function matchingStrings(strings, queries) {
  const map = {};
  const res = [];

  for (const string of strings) {
    map[string] = map[string] ? map[string] + 1 : 1;
  }

  for (const query of queries) {
    if (map[query] == null) {
      res.push(0);
    } else {
      res.push(map[query]);
    }
  }

  return res;
}
