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
var mergeNodes = function (head) {
  let left = head
  let sum = 0
  let cur = head.next

  while (cur != null) {
    if (cur.val === 0) {
      left.val = sum
      left.next = cur.next == null ? null : cur
      left = cur
      sum = 0
    }

    sum += cur.val
    cur = cur.next
  }

  return head
}
