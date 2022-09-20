/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head == null) {
    return null;
  }

  const map = new Map();
  let current = head;

  while (current != null) {
    if (map.has(current)) {
      return current;
    }

    map.set(current, true);
    current = current.next;
  }

  return null;
};
