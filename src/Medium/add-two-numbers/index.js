/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let root = new ListNode();
  let current = root;
  let carry = 0;

  while (l1 != null || l2 != null || carry > 0) {
    const newNode = new ListNode();
    const sum = (l1?.val || 0) + (l2?.val || 0) + carry;

    if (sum <= 9) {
      newNode.val = sum;
      carry = 0;
    } else {
      carry = 1;
      newNode.val = sum % 10;
    }

    current.next = newNode;
    current = current.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  return root.next;
};
