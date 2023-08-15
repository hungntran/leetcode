/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let left = [];
  let right = [];

  let cur = head;

  while (cur != null) {
    if (cur.val < x) {
      left.push(new ListNode(cur.val));
    } else {
      right.push(new ListNode(cur.val));
    }

    cur = cur.next;
  }

  const acc = left.concat(right);
  for (let i = 0; i < acc.length - 1; i++) {
    acc[i].next = acc[i + 1];
  }

  return acc[0] || head;
};
