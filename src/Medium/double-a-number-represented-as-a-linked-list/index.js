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
var doubleIt = function (head) {
  const stack = []

  let cur = head

  while (cur != null) {
    stack.push(cur)
    cur = cur.next
  }

  let sum = 0
  let carry = 0

  while (stack.length > 0) {
    const node = stack.pop()

    sum += 2 * node.val + carry

    if (sum > 9) {
      carry = Math.floor(sum / 10)
    } else {
      carry = 0
    }

    node.val = sum % 10
    sum = 0
  }

  if (carry) {
    const node = new ListNode(carry, head)
    return node
  }

  return head
}
