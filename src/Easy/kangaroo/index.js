/**
 * https://www.hackerrank.com/challenges/kangaroo
 */
function kangaroo(x1, v1, x2, v2) {
  if ((x2 - x1) % (v1 - v2) !== 0 || v1 <= v2) {
    return 'NO';
  }

  return 'YES';
}

export default kangaroo;
