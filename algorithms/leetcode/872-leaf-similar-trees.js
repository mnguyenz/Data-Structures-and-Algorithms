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
const leafSimilar = (root1, root2) => {
  const go = (root, leaves = []) => {
    if (!root) {
      return;
    }
    if (!root.left && !root.right) {
      leaves.push(root.val);
    }
    go(root.left, leaves);
    go(root.right, leaves);
  };
  const l1 = [];
  const l2 = [];
  go(root1, l1);
  go(root2, l2);
  if (l1.length !== l2.length) {
    return false;
  }
  for(let i=0; i < l1.length; ++i) {
    if (l1[i] !== l2[i]) {
      return false;
    } 
  }
  return true;
};