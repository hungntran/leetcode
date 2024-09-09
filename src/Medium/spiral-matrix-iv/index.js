/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */
var spiralMatrix = function (m, n, head) {
  const direction = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ]

  const matrix = new Array(m).fill(0).map((e) => new Array(n).fill(-1))
  const visited = new Array(m).fill(0).map((e) => new Array(n).fill(false))

  let d = 0
  let i = 0
  let j = 0
  let cur = head

  while (cur != null) {
    matrix[i][j] = cur.val
    visited[i][j] = true
    cur = cur.next

    let [di, dj] = direction[d]

    if (matrix[i + di]?.[j + dj] == null || visited[i + di][j + dj]) {
      d = (d + 1) % 4
      ;[di, dj] = direction[d]
    }

    i = i + di
    j = j + dj
  }

  return matrix
}
