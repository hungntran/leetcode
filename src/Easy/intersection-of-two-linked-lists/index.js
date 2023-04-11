/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  visit(headA);
  return visit(headB);
};

const visit = (head) => {
  let current = head;
  while (current != null) {
    if (current.visited) {
      return current;
    }

    current.visited = true;
    current = current.next;
  }

  return null;
};
