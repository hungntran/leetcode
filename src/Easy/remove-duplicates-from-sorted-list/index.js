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
export const deleteDuplicates = function (head) {
  if (head == null) {
    return head;
  }

  let cur = head;
  let prev = head;

  while (cur != null && cur.next != null) {
    cur = cur.next;

    if (cur.val !== prev.val) {
      prev.next = cur;
      prev = cur;
    }
  }

  prev.next = null;
  return head;
};
