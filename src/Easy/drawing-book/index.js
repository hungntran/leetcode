/*
 * Complete the 'pageCount' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER p
 */

export function pageCount(n, p) {
  const step = Math.min(n % 2 !== 0 ? n - p : n - p + 1, p);
  return Math.floor(step / 2);
}
