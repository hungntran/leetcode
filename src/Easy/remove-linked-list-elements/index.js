/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let current = head;

  while (current && head) {
    if (head.val === val) {
      head = head.next;
      continue;
    }

    if (current.next && current.next.val === val) {
      let next = current.next;
      current.next = next.next;
      continue;
    }

    current = current.next;
  }

  return head;
};
