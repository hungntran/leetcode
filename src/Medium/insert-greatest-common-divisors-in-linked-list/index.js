/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function (head) {
  let prev = head;
  let cur = head.next;

  while (cur != null) {
    const node = new ListNode(gcd(prev.val, cur.val), cur);
    prev.next = node;
    prev = cur;
    cur = cur.next;
  }

  return head;
};

const gcd = (a, b) => {
  if (a === b) {
    return a;
  }

  if (a > b) {
    return gcd(a - b, b);
  }

  return gcd(a, b - a);
};
