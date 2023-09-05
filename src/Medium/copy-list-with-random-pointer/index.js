/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const map = new Map();

  let cur = head;
  let curCopy = new Node();
  let shadowCopy = curCopy;

  while (cur != null) {
    const node = new Node(cur.val);
    curCopy.next = node;

    map.set(cur, node);

    cur = cur.next;
    curCopy = curCopy.next;
  }

  while (head != null) {
    if (head.random != null) {
      const copiedNode = map.get(head);
      copiedNode.random = map.get(head.random);
    }

    head = head.next;
  }

  return shadowCopy.next;
};
