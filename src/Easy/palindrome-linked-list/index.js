/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  const track = [];

  while (head) {
    track.push(head.val);
    head = head.next;
  }

  return track.join('') === track.reverse().join('');
};
