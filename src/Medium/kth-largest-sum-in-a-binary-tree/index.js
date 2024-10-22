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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
    const sum = []

    bfs(root, 0)

    sum.sort((a, b) => b - a)

    return sum[k - 1] || -1

    function bfs(node, level = 0) {
        if (node == null) {
            return
        }

        if (!sum[level]) {
            sum[level] = 0
        }

        sum[level] += node.val

        bfs(node.left, level + 1)
        bfs(node.right, level + 1)
    }
}
