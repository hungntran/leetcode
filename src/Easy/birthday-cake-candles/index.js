/*
 * https://www.hackerrank.com/challenges/birthday-cake-candles
 */

function birthdayCakeCandles(candles) {
  let count = 0;
  let max = -Infinity;

  for (const candle of candles) {
    if (candle > max) {
      max = candle;
      count = 1;
    } else if (candle === max) {
      count += 1;
    }
  }

  return count;
}
