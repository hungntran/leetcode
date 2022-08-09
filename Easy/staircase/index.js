/**
 * https://www.hackerrank.com/challenges/staircase
 */

function staircase(n) {
  for (let index = 0; index < n; index++) {
    const spaces = " ".repeat(n - 1 - index);
    const hashs = "#".repeat(index + 1);

    console.log(spaces + hashs);
  }
}
