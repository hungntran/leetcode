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
var reverseList = function (head) {
  let newHead = null;

  while (head != null) {
    const node = new ListNode(head.val);
    node.next = newHead;
    newHead = node;
    head = head.next;
  }

  return newHead;
};
