/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
    if (root1 == null && root2 == null) {
        return true
    }

    if (root1 == null || root2 == null) {
        return false
    }

    if (root1.val !== root2.val) {
        return false
    }

    if (root1.left?.val !== root2.left?.val) {
        if (root1.left?.val !== root2.right?.val) {
            return false
        } else {
            const temp = root2.right
            root2.right = root2.left
            root2.left = temp
        }
    }

    return flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)
}
