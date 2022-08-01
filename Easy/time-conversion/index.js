/*
 * https://www.hackerrank.com/challenges/time-conversion
 */

function timeConversion(s) {
  const suffix = s.slice(-2);

  let hours = parseInt(s.slice(0, 2));

  if (suffix === "AM") {
    hours = hours % 12;
  } else {
    hours = hours === 12 ? 12 : hours + 12;
  }

  return `${String(hours).padStart(2, "0")}${s.slice(2, 8)}`;
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("12:00:00AM"));
console.log(timeConversion("12:45:54PM"));
