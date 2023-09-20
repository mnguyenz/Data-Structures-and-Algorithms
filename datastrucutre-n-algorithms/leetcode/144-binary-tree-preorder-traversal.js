function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var preorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var stack = [root];
  
  while(stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};

console.log(preorderTraversal([1,null,2,3]));