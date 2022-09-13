/*
 * https://www.hackerrank.com/challenges/array-left-rotation
 */

export function rotateLeft(d, arr) {
  const step = d % arr.length;

  return [...arr.slice(step), ...arr.slice(0, step)];
}
