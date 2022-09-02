/**
 * https://www.hackerrank.com/challenges/day-of-the-programmer/
 */

export function dayOfProgrammer(year) {
  const isLeap = isLeapYear(year);
  const febDays = isLeap ? 29 : 28;
  const days = 256 - (215 + febDays);

  return `${year === 1918 ? days + 13 : days}.09.${year}`;
}

function isLeapYear(year) {
  return year < 1918 ? year % 4 === 0 : year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
