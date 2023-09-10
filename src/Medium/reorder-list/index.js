/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  let slow = head;
  let fast = head;
  const stack1 = [];

  while (fast != null && fast.next != null) {
    stack1.push(slow);
    slow = slow.next;
    fast = fast.next.next;
  }

  const stack2 = [];
  while (slow != null) {
    stack2.push(slow);
    slow = slow.next;
  }

  let tmp = null;

  while (stack1.length !== 0 && stack2.length !== 0) {
    const node1 = stack1.shift();
    const node2 = stack2.pop();

    if (tmp != null) {
      tmp.next = node1;
    }

    node1.next = node2;
    node2.next = null;
    tmp = node2;
  }

  if (tmp && stack1.length > 0) {
    const node = stack1.pop();
    node.next = null;
    tmp.next = node;
  }

  if (tmp && stack2.length > 0) {
    const node = stack2.pop();
    node.next = null;
    tmp.next = node;
  }

  return head;
};
