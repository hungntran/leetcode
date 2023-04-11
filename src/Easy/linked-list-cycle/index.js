/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  let current = head;

  while (current != null) {
    if (current.visited) {
      return true;
    }

    current.visited = true;
    current = current.next;
  }

  return false;
};
