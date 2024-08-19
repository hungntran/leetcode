/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function (head) {
  const store = []

  let cur = head.next
  let prev = head
  let i = 1

  while (cur.next != null) {
    const next = cur.next
    const isMin = cur.val < next.val && cur.val < prev.val
    const isMax = cur.val > next.val && cur.val > prev.val

    if (isMax || isMin) {
      store.push(i)
    }

    prev = cur
    cur = next
    i += 1
  }

  const result = [-1, -1]

  if (store.length >= 2) {
    result[1] = store.at(-1) - store[0]
    result[0] = Infinity

    for (let i = 0; i < store.length - 1; i++) {
      result[0] = Math.min(result[0], store[i + 1] - store[i])
    }
  }

  return result
}
