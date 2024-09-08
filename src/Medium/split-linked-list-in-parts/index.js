/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
  const { length, nodeList } = resolveLinkList(head)

  const size = parseInt(length / k)
  const output = []
  let mod = length % k
  let left = 0

  for (let i = 1; i <= k; i++) {
    const right = left + size + (mod > 0 ? 1 : 0)
    output.push(nodeList[left] ?? null)

    if (nodeList[right - 1]) {
      nodeList[right - 1].next = null
    }

    mod -= 1
    left = right
  }

  return output

  function resolveLinkList(head) {
    const nodeList = []
    let length = 0
    let cur = head

    while (cur != null) {
      nodeList.push(cur)
      length += 1
      cur = cur.next
    }

    return {
      length,
      nodeList,
    }
  }
}
