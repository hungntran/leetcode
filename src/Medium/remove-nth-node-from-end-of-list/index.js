/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  let l = dummy;
  let r = head;

  while (n > 0) {
    r = r.next;
    n--;
  }

  while (r != null) {
    l = l.next;
    r = r.next;
  }

  l.next = l.next.next;
  return dummy.next;
};
