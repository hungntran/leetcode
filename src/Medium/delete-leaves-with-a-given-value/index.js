/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {TreeNode}
 */
var removeLeafNodes = function (root, target) {
  const queue = bfs(root)

  while (queue.length > 0) {
    const node = queue.pop()

    if (node.left == null && node.right == null && node.val === target) {
      const key = node.isLeft ? 'left' : 'right'
      if (node.parent) node.parent[key] = null
      else return null
    }
  }

  return root
}

function bfs(node) {
  const queue = [node]
  const output = []

  while (queue.length > 0) {
    const node = queue.shift()
    output.push(node)

    if (node.left) {
      node.left.parent = node
      node.left.isLeft = true
      queue.push(node.left)
    }

    if (node.right) {
      node.right.parent = node
      queue.push(node.right)
    }
  }

  return output
}
