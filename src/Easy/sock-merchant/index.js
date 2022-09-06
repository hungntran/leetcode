/*
 * https://www.hackerrank.com/challenges/sock-merchant
 */

export function sockMerchant(n, ar) {
  const socks = ar.reduce((res, item) => {
    res[item] = (res[item] ?? 0) + 1;
    return res;
  }, {});

  let count = 0;
  for (const key in socks) {
    count += Math.floor(socks[key] / 2);
  }

  return count;
}
